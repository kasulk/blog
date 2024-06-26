import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import React from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Link, ExternalLink, AffiliateLink } from "@/components/Links";
import { H2, H3, H4, H5, H6 } from "@/components/Headings";
import { Accordion, Callout, SupportButton } from "@/components";
import { CalloutType, siteConfig } from "@/config";
import * as links from "@/config/links";
import { getAnchorFromLinkText } from "@/lib/utils/getAnchorFromLinkText";

export const customComponents: MDXComponents = {
  /// nextjs components
  Image,
  /// custom components
  Accordion: (props) => {
    const { children, ...restProps } = props;
    // extract the first line/children to be the summary
    const [firstParagraph, ...content] = children;
    const summary = firstParagraph.props.children;

    return (
      <Accordion {...restProps} summary={summary} content={content}></Accordion>
    );
  },
  ExternalLink,
  SupportButton: ({ className }) => (
    <SupportButton className={`h-7 w-7 ${className}`} />
  ),
  /// HTML-elements compiled from MD(X)
  //! only works for compiled MD(X)-elements
  // e.g. '## Some Title' ==> '<h2>Some Title</h2>'
  h2: (props) => (
    <H2 autoCopyable {...props}>
      {props.children}
    </H2>
  ),
  h3: (props) => (
    <H3 autoCopyable {...props}>
      {props.children}
    </H3>
  ),
  h4: (props) => (
    <H4 autoCopyable {...props}>
      {props.children}
    </H4>
  ),
  h5: (props) => (
    <H5 autoCopyable {...props}>
      {props.children}
    </H5>
  ),
  h6: (props) => (
    <H6 autoCopyable {...props}>
      {props.children}
    </H6>
  ),
  details: (props) => {
    const { className, children } = props;
    return (
      <details className="hover:cursor-pointer hover:underline">
        {children}
        blub
      </details>
    );
  },
  a: (props) => {
    const { href, title, children, ...restProps } = props;
    // internal link; same page (i.e. anchor link)
    if (href?.startsWith("#")) {
      if (href === "#") {
        const anchor = getAnchorFromLinkText(children);
        return (
          <a href={anchor} title={title} {...restProps}>
            {children}
          </a>
        );
      }
      return <a {...props}>{children}</a>;
    }
    // internal link; other page
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
    const nestedNode = (children[1] as React.ReactElement)?.props.children;

    // fixes issue if other HTML-elements are used within blockquotes, e.g. <br/>
    const hasMoreNestedChildren = Array.isArray(nestedNode);
    const content = hasMoreNestedChildren
      ? nestedNode.filter((child) => typeof child === "string").join("")
      : nestedNode;

    const typeTag = content.match(/\[\!(.*?)\]/); // e.g. extract 'note' from [!note]

    if (!content || !typeTag) return <blockquote>{props.children}</blockquote>;

    const [type, title] = typeTag[1].toLowerCase().split(":") as [
      CalloutType,
      string?,
    ];
    const text = content.split("\n").slice(1).join("\n");

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
