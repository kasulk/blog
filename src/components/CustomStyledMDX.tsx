import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Link, LinkExternal, AffiliateLink } from "@/components";
import { SupportButton } from "@/components";
import { siteConfig } from "@/config";
// import {
//   affiliateLinks,
//   docsLinks,
//   donateLinks,
//   socialLinks,
//   vgWortLinks,
// } from "@/config/links";
import * as links from "@/config/links";

// const links = {
//   ...affiliateLinks,
//   ...docsLinks,
//   ...donateLinks,
//   ...socialLinks,
//   ...vgWortLinks,
// };

export const customComponents: MDXComponents = {
  /// nextjs components
  Image,
  /// html-elements compiled from md(x)
  //! only works for compiled md(x)-elements
  // e.g. '## Some Title' => '<h2>Some Title</h2>'
  a: (props) => {
    const { href, children } = props;
    if (href?.startsWith("#")) return <a {...props}>{children}</a>;
    if (href?.startsWith("/")) return <Link {...props}>{children}</Link>;
    if (href?.startsWith("$"))
      return (
        <AffiliateLink partner={href.slice(1)} {...props}>
          {children}
        </AffiliateLink>
      );
    return <LinkExternal {...props}>{children}</LinkExternal>;
  },
  /// custom components
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
