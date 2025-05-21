"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const { data } = useQuery({
  //   queryKey: ["test"],
  //   queryFn: async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     return res.json();
  //   },
  // });
  // console.log(data);
  return (
    <div>
      hello
      <Button>Click Me!</Button>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
