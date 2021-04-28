import React from "react";
import Markdown from "../components/Markdown";
import markdown20210421 from "./20210421.md";
import markdown20210428 from "./20210428.md";
const MarkdownDemo = () => {
  return <Markdown markdown={markdown20210421 + markdown20210428} />;
};
export default MarkdownDemo;
