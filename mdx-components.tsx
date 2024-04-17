import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    /// Allows customizing built-in components, e.g. to add styling.
    ...components,
    //-- h2: ({ children }) => <h2 className="text-danger">{children}</h2>,
  };
}
