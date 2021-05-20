import React from "react";
import Markdown from "../components/Markdown";
import markdown from "./index.md";
import ArrayMd from "./Array.md";
import JS from "./JS.md";
import ZY from "./ZY.md";
import MOBX from "./MOBX.md";
import JSBASE from "./JSBASE.md";
import TYPEOF from "./TYPEOF.md";
import ROUTER from "./ROUTER.md";

const MarkdownDemo = (props) => {
  // return <Markdown markdown={markdown + { undefined: "", Array, JS, ZY, MOBX, JSBASE, TYPEOF, ROUTER }[props.match.params.id]} />;
  return <Markdown markdown={markdown + ArrayMd + JS + ZY + MOBX + JSBASE + TYPEOF + ROUTER} />;
};
export default MarkdownDemo;
