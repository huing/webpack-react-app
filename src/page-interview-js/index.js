import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import markdownJS from "./JS.md";
import markdownZY from "./ZY.md";

const MarkdownDemo = () => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[gfm]}>{markdownJS}</ReactMarkdown>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdownZY} />
    </div>
  );
};
export default MarkdownDemo;
