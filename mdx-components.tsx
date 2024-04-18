import type { MDXComponents } from "mdx/types";
import { customComponents } from "@/components/mdx-remote";

// used mainly for imported MDX-files/components into pages
// these are processed by @next/mdx and DO NOT support frontmatter
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    /// Allows customizing built-in components, e.g. to add styling.
    ...components,
    ...customComponents,
  };
}
