import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import markdown from "./HTML.md";

const MarkdownDemo = () => {
  return <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />;
};
export default MarkdownDemo;
