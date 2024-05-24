import { Metadata } from "next";
import { PageHeader, H2, BlogPostsList } from "@/components";
import { getBlogs } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
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
      <PageHeader>Blog</PageHeader>

      <H2>Letzte Blogs</H2>
      <BlogPostsList blogs={formattedBlogs} />
    </>
  );
}
