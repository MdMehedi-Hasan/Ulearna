"use client";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
const TextEditor = ({ value, setValue }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="h-full"
      style={{
        height: "100%",
      }}
    />
  );
};

export default TextEditor;
