import { Metadata } from "next";
import { H1, H2, BlogPostsList } from "@/components";
import { getBlogs } from "./blogFetchers";
import { formatBlogs } from "./formatBlogs";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: `Mein Blog | ${siteConfig.name}`,
  description: "Hier findest du eine Liste meiner letzten Blog-Posts",
};

export default async function Blog() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);

  return (
    <>
      <H1>Blog</H1>
      <H2>Letzte Blogs</H2>
      <BlogPostsList blogs={formattedBlogs} />
    </>
  );
}
