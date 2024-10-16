import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // needed to render HTML inside Mardown
import DOMPurify from "dompurify"; // sanitizes HTML
import { JSDOM } from "jsdom"; // needed for DOMPurify to run on server

type Props = {
  children: React.ReactNode;
};

export function FetchedMarkdown({ children }: Props) {
  const markdown = typeof children === "string" ? children : "";

  const window = new JSDOM("").window;
  const cleanedMarkdown = DOMPurify(window).sanitize(markdown);

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{cleanedMarkdown}</ReactMarkdown>
  );
}
