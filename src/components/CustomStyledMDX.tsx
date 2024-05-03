import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { AffiliateLink, SupportButton } from "@/components";
import { siteConfig } from "@/config/site";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

export const customComponents: MDXComponents = {
  /// customized built-in components, e.g. add styling
  h2: ({ children }) => <h2 className="text-accent">{children}</h2>,
  blockquote: ({ children }) => (
    <blockquote className="mx-4">{children}</blockquote>
  ),
  /// nextjs components
  Link: ({ children, href }) => (
    <Link href={href} className="text-accent no-underline hover:text-danger/80">
      {children}
    </Link>
  ),
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
      options={{ scope: { ...siteConfig, ...(props.options?.scope || {}) } }}
    />
  );
}
