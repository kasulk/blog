import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Link, AffiliateLink, SupportButton } from "@/components";
import { links, siteConfig } from "@/config";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

export const customComponents: MDXComponents = {
  /// customized built-in components, e.g. add styling
  h2: ({ children }) => <h2 className="text-accent">{children}</h2>,
  blockquote: ({ children }) => (
    <blockquote className="mx-4">{children}</blockquote>
  ),
  /// nextjs components
  Link: ({ children, href }) => <Link href={href}>{children}</Link>,
  Image,
  /// custom components
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
