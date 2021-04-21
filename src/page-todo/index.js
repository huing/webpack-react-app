import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import markdown20210421 from "./20210421.md";

const MarkdownDemo = () => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[gfm]}>{markdown20210421}</ReactMarkdown>
    </div>
  );
};
export default MarkdownDemo;
