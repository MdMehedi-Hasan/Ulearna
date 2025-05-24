"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "@/components/details/postHeaders";
import { PostDetail } from "@/components/details/postDetails";

export default function Details() {
  const { id } = useParams();

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          return {
            ...data,
            body: data.body.replace(/<\/?[^>]+(>|$)/g, ""),
          };
        });
    },
  });

  return (
    <div className="min-h-screen pb-16">
      <PostHeader />
      <Separator />
      <main className="mt-10 px-16">
        <PostDetail post={post} />
      </main>
    </div>
  );
}
