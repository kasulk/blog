import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

export const customComponents: MDXComponents = {
  /// Allows customizing built-in components, e.g. to add styling
  h1: ({ children }) => <h1 className="text-warning">{children}</h1>,
  h2: ({ children }) => <h2 className="text-danger">{children}</h2>,
  h3: ({ children }) => <h3 className="text-success">{children}</h3>,
};

export function CustomStyledMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components || {}) }}
    />
  );
}
