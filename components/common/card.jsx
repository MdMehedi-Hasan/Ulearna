import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

const PostCard = ({ post, setOpen, setToDeletePost,setToEditPost }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{post?.body}</CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Button
          variant="outline"
          onClick={() => {
            setOpen((prev) => ({
              ...prev,
              editModal: true,
            }));
            setToEditPost(post?.id);
          }}
        >
          <LuPencilLine />
          Edit
        </Button>
        <Button
          onClick={() => {
            setOpen((prev) => ({
              ...prev,
              deleteModal: true,
            }));
            setToDeletePost(post?.id);
          }}
          className="border border-[#eb3131] text-[#eb3131] hover:bg-[#eb3131] hover:text-white"
          variant="outline"
        >
          <AiOutlineDelete /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
