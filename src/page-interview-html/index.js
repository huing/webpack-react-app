import React from "react";
import Markdown from "../components/Markdown";
import markdownText from "./HTML.md";

const MarkdownDemo = (props) => {
  console.log(props);
  console.log(props.match.params.id);
  return <Markdown markdown={markdownText} />;
};
export default MarkdownDemo;
