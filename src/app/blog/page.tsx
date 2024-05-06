import { Metadata } from "next";
import { BlogPageHeader, BlogPostsList } from "@/components";
import { getBlogs } from "./blogFetchers";
import { formatBlogs } from "./formatBlogs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Mein Blog | ${siteConfig.name}`,
  description: "Hier findest du eine Liste meiner letzten Blog-Posts",
};

export default async function Blog() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);

  return (
    <>
      <BlogPageHeader />
      <h2 className="mb-0 text-2xl sm:mb-2 md:text-3xl">Letzte Blogs</h2>
      <BlogPostsList blogs={formattedBlogs} />
    </>
  );
}
