import React from "react";
import Markdown from "../components/Markdown";
import markdownText from "./CSS.md";

const MarkdownDemo = () => {
  return <Markdown markdown={markdownText} />;
};
export default MarkdownDemo;
