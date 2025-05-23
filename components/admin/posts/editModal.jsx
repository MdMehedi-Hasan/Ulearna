import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditModal = ({
  dialogOpen,
  setDialogOpen,
  handleEditPost,
  setToEditPost,
  register,
  handleSubmit,
}) => {
  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          setDialogOpen((prev) => ({
            ...prev,
            editModal: false,
          }));
          setToEditPost(null);
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Edit post</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(handleEditPost)}>
          <Input placeholder="id" {...register("id")} />
          <Input placeholder="userid" {...register("userid")} />
          <Input placeholder="title" {...register("title")} />
          <Input placeholder="body" {...register("body")} />
          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
