import TextEditor from "@/components/common/textEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreatePost = () => {
  return (
    <div className="mt-36">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title">Add a Title</Label>
        <Input id="title" type="text" placeholder="Title" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title">Add Body</Label>
        <TextEditor />
      </div>
    </div>
  );
};

export default CreatePost;
