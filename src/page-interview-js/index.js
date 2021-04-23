import React from "react";
import Markdown from "../components/Markdown";
import markdown from "./index.md";
import Array from "./Array.md";
import JS from "./JS.md";
import ZY from "./ZY.md";

const MarkdownDemo = (props) => {
  return <Markdown markdown={markdown + { undefined: "", Array, JS, ZY }[props.match.params.id]} />;
};
export default MarkdownDemo;
