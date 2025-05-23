import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiTwotoneDelete } from "react-icons/ai";

const PostCard = ({ post, setOpen, setToDeletePost }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{post?.body}</CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Button variant="outline">Edit</Button>
        <Button
          onClick={() => {
            setOpen(true), 
            setToDeletePost(post.id);
          }}
          className="bg-[#eb3131] text-white hover:bg-red-700"
        >
          <AiTwotoneDelete /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
