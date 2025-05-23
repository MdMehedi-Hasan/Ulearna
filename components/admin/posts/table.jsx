import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

const PostsTable = ({
  posts,
  setOpen,
  setToDeletePost,
  setToEditPost,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table class="w-full table-auto border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 text-center border">ID</th>
            <th class="px-4 py-2 text-center border">User&nbsp;ID</th>
            <th class="px-4 py-2 text-center border">Title</th>
            <th class="px-4 py-2 text-center border">Body</th>
            <th class="px-4 py-2 text-center border">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post?.id}>
              <td class="px-4 py-2 text-center border">{post?.id}</td>
              <td class="px-4 py-2 text-center border">{post?.userId}</td>
              <td class="px-4 py-2 border break-words">{post?.title}</td>
              <td class="px-4 py-2 border break-words">{post?.body}</td>
              <td class="px-4 py-2 border break-words">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white"
                    onClick={() => {
                      setOpen((prev) => ({
                        ...prev,
                        editModal: true,
                      }));
                      setToEditPost(post?.id);
                    }}
                  >
                    <LuPencilLine />
                  </Button>
                  <Button
                    variant="outline"
                    className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => {
                      setOpen((prev) => ({
                        ...prev,
                        deleteModal: true,
                      }));
                      setToDeletePost(post?.id);
                    }}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
