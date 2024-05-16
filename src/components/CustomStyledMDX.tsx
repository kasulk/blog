import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { H1, H2, H3, H4, Link } from "@/components";
import { AffiliateLink, SupportButton } from "@/components";
import { links, siteConfig } from "@/config";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

export const customComponents: MDXComponents = {
  /// customized built-in components, e.g. add styling
  h1: ({ children }) => <H1 className="text-accent">{children}</H1>,
  h2: ({ children }) => <H2 className="text-accent">{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  h4: ({ children }) => <H4>{children}</H4>,
  blockquote: ({ children }) => (
    <blockquote className="mx-4">{children}</blockquote>
  ),
  /// nextjs components
  Image,
  /// custom components
  Link: ({ children, href }) => <Link href={href}>{children}</Link>,
  AffiliateLink,
  SupportButton: ({ className }) => (
    <SupportButton className={`${className} h-7 w-7`} />
  ),
};

export function CustomStyledMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      // pass custom components through components prop:
      components={{ ...customComponents, ...(props.components || {}) }}
      // pass custom data/variables through options/scope prop:
      options={{
        scope: { ...siteConfig, ...links, ...(props.options?.scope || {}) },
      }}
    />
  );
}
