import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Link, LinkExternal, AffiliateLink, H1, H4 } from "@/components";
import { SupportButton } from "@/components";
import { links, siteConfig } from "@/config";

type RelType =
  | "noopener"
  | "noreferrer"
  | "noopener noreferrer"
  | "noreferrer noopener";

const allowedRelValues = [
  "noopener",
  "noreferrer",
  "noopener noreferrer",
  "noreferrer noopener",
] as const;

export const customComponents: MDXComponents = {
  /// nextjs components
  Image,
  /// elements compiled from md(x)
  //! only works for compiled md(x)-elements
  // e.g. '## Some Title' => '<h2>Some Title</h2>'
  h1: ({ children }) => <h1 className="text-warning">{children}</h1>,
  h2: ({ children }) => <h2 className="text-danger">{children}</h2>,
  h3: ({ children }) => <h3 className="text-success">{children}</h3>,
  h4: ({ children }) => <h4 className="text-success">{children}</h4>,
  a: (props) => {
    if (props.href?.startsWith("#")) return <a {...props}>{props.children}</a>;
    return <LinkExternal {...props}>{props.children}</LinkExternal>;
  },
  /// custom components
  Link,
  AffiliateLink,
  SupportButton: ({ className }) => (
    <SupportButton className={`h-7 w-7 ${className}`} />
  ),
};

export function CustomStyledMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      // pass custom components through components prop:
      components={{ ...customComponents, ...(props.components || {}) }}
      options={{
        // pass custom data/variables through options/scope prop:
        scope: { ...siteConfig, ...links, ...(props.options?.scope || {}) },
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          format: "mdx",
        },
      }}
    />
  );
}
