import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import React from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Link, ExternalLink, AffiliateLink } from "@/components/Links";
import { H2, H3, H4, H5, H6 } from "@/components/Headings";
import { Callout, SupportButton } from "@/components";
import { CalloutType, siteConfig } from "@/config";
import * as links from "@/config/links";

export const customComponents: MDXComponents = {
  /// nextjs components
  Image,
  /// custom components
  ExternalLink,
  SupportButton: ({ className }) => (
    <SupportButton className={`h-7 w-7 ${className}`} />
  ),
  /// HTML-elements compiled from MD(X)
  //! only works for compiled MD(X)-elements
  // e.g. '## Some Title' ==> '<h2>Some Title</h2>'
  h2: (props) => <H2 {...props}>{props.children}</H2>,
  h3: (props) => <H3 {...props}>{props.children}</H3>,
  h4: (props) => <H4 {...props}>{props.children}</H4>,
  h5: (props) => <H5 {...props}>{props.children}</H5>,
  h6: (props) => <H6 {...props}>{props.children}</H6>,
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
  blockquote: (props) => {
    const children = React.Children.toArray(props.children);
    const content = (children[1] as React.ReactElement)?.props
      .children as string;
    const typeTag = content.match(/\[\!(.*?)\]/); // e.g. extract 'note' from [!note]

    if (!content || !typeTag) return <blockquote>{props.children}</blockquote>;

    const [type, title] = typeTag[1].toLowerCase().split(":") as [
      CalloutType,
      string?,
    ];
    const text = content.split("\r\n").slice(1).join("\r\n");

    return (
      <Callout title={title || type} type={type}>
        {text}
      </Callout>
    );
  },
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
