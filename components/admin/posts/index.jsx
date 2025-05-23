"use client";

import CustomTabs from "@/components/tabs";
import { useSearchParams } from "next/navigation";
import PostsTable from "./table";
import PostCard from "@/components/common/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PostsPage = () => {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toDeletePost, setToDeletePost] = useState(null);
  console.log("toDeletePost", toDeletePost);
  /* Assuming all the post is from this single user (As mentioned in the task) */
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  const deletePostMutation = useMutation({
    mutationFn: async () => {
      console.log("inside deletePostMutation");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${toDeletePost}`,
        {
          method: "DELETE",
        }
      );
      return res.json();
    },
    onSuccess: () => {
      toast.success("Post deleted successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      setToDeletePost(null);
      setDialogOpen(false);
    },
  });
  const handleDeletePost = () => {
    deletePostMutation.mutate();
  };
  const options = [
    { name: "List", params: "list" },
    { name: "Grid", params: "grid" },
  ];
  const searchParams = useSearchParams();
  const displayType = searchParams.get("view") || options?.[0]?.params;
  return (
    <div className="px-10">
      <div className="mt-5 mb-10 flex justify-end">
        <CustomTabs options={options} selected={displayType} />
      </div>
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setDialogOpen(false);
            setToDeletePost(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Are you sure?</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center">
            Once you delete this post, it will be permanently removed from the
            database. This action cannot be undone.
          </DialogDescription>
          <DialogFooter>
            <Button onClick={handleDeletePost}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div>
        {displayType === "grid" ? (
          <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {posts?.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                deletePost={deletePostMutation}
                setOpen={setDialogOpen}
                setToDeletePost={setToDeletePost}
              />
            ))}
          </div>
        ) : (
          <PostsTable posts={posts} />
        )}
      </div>
    </div>
  );
};

export default PostsPage;
