"use client";
import { useState } from "react";
import TextEditor from "@/components/common/textEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreatePost = () => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const addPostMutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          body: value,
          userId: 1 /* Keeping this static because in the real world the user id will be provided by authorization */,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return res.json();
    },
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      setValue("");
      reset();
    },
  });
  const handlePost = (data) => {
    addPostMutation.mutate(data);
  };
  return (
    <div className="w-full overflow-hidden h-screen flex items-center justify-center">
      <Card className="w-2/3 p-10">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handlePost)}
        >
          <div className="space-y-2">
            <Label htmlFor="title">Add a Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="body">Add Body</Label>
            <div className="h-36 mb-10">
              <TextEditor
                id="body"
                value={value}
                setValue={setValue}
                {...register("body")}
              />
            </div>
          </div>
          <Button className="ml-auto" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreatePost;
