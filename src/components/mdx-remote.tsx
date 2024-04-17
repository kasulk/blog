import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

const components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling
  h1: ({ children }) => <h1 className="text-warning">{children}</h1>,
  h2: ({ children }) => <h2 className="text-danger">{children}</h2>,
  h3: ({ children }) => <h3 className="text-success">{children}</h3>,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{ parseFrontmatter: true }} // hides frontmatter on rendered MDX
    />
  );
}
