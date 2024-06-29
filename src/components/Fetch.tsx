import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  markdown?: string;
  data?: any;
};

export function Fetch({ markdown, data }: Props) {
  return <>{markdown ? <ReactMarkdown>{markdown}</ReactMarkdown> : data}</>;
}
