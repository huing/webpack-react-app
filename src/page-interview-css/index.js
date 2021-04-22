import React from "react";
import Markdown from "../components/Markdown";
import markdown from "./CSS.md";

const MarkdownDemo = () => {
  return <Markdown markdown={markdown} />;
};
export default MarkdownDemo;
