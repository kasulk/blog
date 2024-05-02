import { Metadata } from "next";
import { getBlogs } from "./blogFetchers";
import { siteConfig } from "@/config/site";
import { formatBlogs } from "./formatBlogs";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: `Mein Blog | ${siteConfig.name}`,
  description: "Hier findest du eine Liste meiner letzten Blog-Posts",
};

export default async function Blog() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);

  return (
    <main className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1 className="inline-block text-4xl font-black lg:text-5xl">Blog</h1>
      <section>
        <h2 className="text-3xl">Letzte Blogs</h2>
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
    </main>
  );
}
