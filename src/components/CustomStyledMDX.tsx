import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import { AffiliateLink } from "@/components";
import { siteConfig } from "@/config/site";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

export const customComponents: MDXComponents = {
  /// Customized built-in components, e.g. add styling
  h1: ({ children }) => <h1 className="text-warning">{children}</h1>,
  h2: ({ children }) => <h2 className="text-danger">{children}</h2>,
  h3: ({ children }) => <h3 className="text-success">{children}</h3>,
  /// Add custom components
  AffiliateLink,
};

export function CustomStyledMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      // pass custom components through components prop:
      components={{ ...customComponents, ...(props.components || {}) }}
      // pass custom data/variables through options/scope prop:
      options={{ scope: { ...siteConfig, ...(props.options?.scope || {}) } }}
    />
  );
}
