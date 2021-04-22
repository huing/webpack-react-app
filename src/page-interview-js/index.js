import React from "react";
import Markdown from "../components/Markdown";
import markdownJS from "./JS.md";
import markdownZY from "./ZY.md";

const MarkdownDemo = () => {
  return (
    <div>
      <Markdown markdown={markdownJS + markdownZY} />
    </div>
  );
};
export default MarkdownDemo;
