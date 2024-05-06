import { Metadata } from "next";
import { BlogCard, BlogPageHeader } from "@/components";
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
    <section className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <BlogPageHeader />
      <h2 className="mb-0 text-2xl sm:mb-2 md:text-3xl">Letzte Blogs</h2>
      <ul className="list-none py-2 pl-0">
        {formattedBlogs.map((blog) => (
          <li
            key={`blogs-li-${blog.slug}`}
            className="my-5 flex list-none justify-between rounded-lg py-2 ps-0 align-middle duration-300"
          >
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </section>
  );
}
