import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
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
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  a: ({ href, children, ...props }) => {
    let isMd = /^md-/.test(href);
    return (
      <a
        id={isMd ? href : undefined}
        target={isMd ? "_self" : "_blank"}
        href={isMd ? `/markdown#${href}` : href}
        {...props}
      >
        {children}
      </a>
    );
  },
  // h1: "h2",
  // em: ({ node, ...props }) => <i style={{ color: "red" }} {...props} />,
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
  // addr: ({ inline, ...props }) => {
  //   console.log(props);
  //   return <address {...props} />;
  // },
};

const Markdown = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
