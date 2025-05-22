import CustomTabs from "@/components/tabs";
import React from "react";

const Posts = () => {
  const options = [
    { name: "List", params: "list" },
    { name: "Grid", params: "grid" },
  ];
  return (
    <div>
      <CustomTabs options={options} />
    </div>
  );
};

export default Posts;
