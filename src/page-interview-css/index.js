import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import markdown from "./CSS.md";

const MarkdownDemo = () => {
  return <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>;
};
export default MarkdownDemo;
