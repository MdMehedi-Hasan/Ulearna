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
import EditModal from "./editModal";
import { useForm } from "react-hook-form";

const PostsPage = () => {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState({
    deleteModal: false,
    editModal: false,
  });
  const [toDeletePost, setToDeletePost] = useState(null);
  const [toEditPost, setToEditPost] = useState(null);
  const { register, handleSubmit, reset } = useForm();
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
      setDialogOpen((prev) => ({
        ...prev,
        deleteModal: false,
      }));
    },
  });
  const editPostMutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${toEditPost}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: data?.id,
            userId: data?.userid,
            title: data?.title,
            body: data?.body,
          }),
        }
      );
      return res.json();
    },
    onSuccess: () => {
      toast.success("Post updated successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      setToEditPost(null);
      setDialogOpen((prev) => ({
        ...prev,
        editModal: false,
      }));
      reset();
    },
  });
  const handleDeletePost = () => {
    deletePostMutation.mutate();
  };
  const handleEditPost = (data) => {
    editPostMutation.mutate(data);
  };
  const options = [
    { name: "List", params: "list" },
    { name: "Grid", params: "grid" },
  ];
  const searchParams = useSearchParams();
  const displayType = searchParams.get("view") || options?.[0]?.params;
  return (
    <div className="px-10 pb-10">
      <Dialog
        open={dialogOpen.deleteModal}
        onOpenChange={(open) => {
          if (!open) {
            setDialogOpen((prev) => ({
              ...prev,
              deleteModal: false,
            }));
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
      <EditModal
        dialogOpen={dialogOpen.editModal}
        setDialogOpen={setDialogOpen}
        handleEditPost={handleEditPost}
        setToEditPost={setToEditPost}
        register={register}
        handleSubmit={handleSubmit}
      />
      <div className="mt-5 mb-10 flex justify-end">
        <CustomTabs options={options} selected={displayType} />
      </div>
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
                setToEditPost={setToEditPost}
              />
            ))}
          </div>
        ) : (
          <PostsTable
            posts={posts}
            deletePost={deletePostMutation}
            setOpen={setDialogOpen}
            setToDeletePost={setToDeletePost}
            setToEditPost={setToEditPost}
          />
        )}
      </div>
    </div>
  );
};

export default PostsPage;
