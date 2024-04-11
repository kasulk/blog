import createMDX from "@next/mdx";
// import remarkGfm from "remark-gfm"; /// for GitHub Flavored MD

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm],
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
