import React from "react";
import Markdown from "../components/Markdown";
import markdownText from "./index.md";
import HTML from "./md-HTML.md";
import CSS from "./md-CSS.md";
import array from "./md-array.md";
import JS from "./md-JS.md";
import ZY from "./md-ZY.md";
import MOBX from "./md-MOBX.md";
import JSBASE from "./md-JSBASE.md";
import TYPEOF from "./md-TYPEOF.md";
import ROUTER from "./md-ROUTER.md";

const MarkdownDemo = (props) => {
  // console.log(props);
  const currentHash = props.location.hash.replace("#md-", "");
  return (
    <Markdown markdown={{ "": markdownText, HTML, CSS, array, JS, ZY, MOBX, JSBASE, TYPEOF, ROUTER }[currentHash]} />
  );
  // return <Markdown markdown={markdownText + HTML + CSS + ArrayMd + JS + ZY + MOBX + JSBASE + TYPEOF + ROUTER} />;
};
export default MarkdownDemo;
