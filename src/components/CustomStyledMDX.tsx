import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Link, ExternalLink, AffiliateLink } from "@/components/Links";
import { SupportButton } from "@/components";
import { siteConfig } from "@/config";
import * as links from "@/config/links";
import { createId } from "@/lib/utils";

export const customComponents: MDXComponents = {
  /// nextjs components
  Image,
  /// HTML-elements compiled from MD(X)
  //! only works for compiled MD(X)-elements
  // e.g. '## Some Title' ==> '<h2>Some Title</h2>'
  h2: ({ children }) => <h2 id={createId(children)}>{children}</h2>,
  h3: ({ children }) => <h3 id={createId(children)}>{children}</h3>,
  h4: ({ children }) => <h4 id={createId(children)}>{children}</h4>,
  h5: ({ children }) => <h5 id={createId(children)}>{children}</h5>,
  h6: ({ children }) => <h6 id={createId(children)}>{children}</h6>,
  a: (props) => {
    const { href, title, children, ...restProps } = props;
    if (href?.startsWith("#")) return <a {...props}>{children}</a>;
    if (href?.startsWith("/")) return <Link {...props}>{children}</Link>;
    if (href?.startsWith("$"))
      return (
        <AffiliateLink partner={href.slice(1)} tooltip={title} {...restProps}>
          {children}
        </AffiliateLink>
      );
    return <ExternalLink {...props}>{children}</ExternalLink>;
  },
  /// custom components
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
