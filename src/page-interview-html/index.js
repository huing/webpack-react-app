import React from "react";
import Markdown from "../components/Markdown";
import markdown from "./HTML.md";

const MarkdownDemo = (props) => {
  console.log(props);
  console.log(props.match.params.id);
  return <Markdown markdown={markdown} />;
};
export default MarkdownDemo;
