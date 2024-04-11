import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    /// Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => <h2 className="text-red-800">{children}</h2>,
    ...components,
  };
}
