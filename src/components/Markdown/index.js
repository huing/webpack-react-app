import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import rehypeRaw from "rehype-raw";
// import rehypeSanitize from "rehype-sanitize";
// import { Typography } from "antd";
import "./index.less";

const components = {
  code({ node, className, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    // console.log(node, className, props, match);
    return match ? <Prism language={match[1]} PreTag="div" style={dark} {...props} /> : <code className={className} {...props} />;
  },
  // input({ disabled, ...props }) {
  //   console.log(disabled, props);
  //   return <input style={dark} {...props} />;
  // },
  // blockquote({ children }) {
  //   // console.log(props);
  //   return (
  //     <Typography.Paragraph>
  //       <blockquote>{children}</blockquote>
  //     </Typography.Paragraph>
  //   );
  // },
};

const Markdown = ({ markdown }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
