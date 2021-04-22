import React from "react";
import Markdown from "../components/Markdown";
import markdown from "./HTML.md";

const MarkdownDemo = () => {
  return <Markdown markdown={markdown} />;
};
export default MarkdownDemo;
