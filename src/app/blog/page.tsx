import Link from "next/link";
import { getBlogs } from "./blogFetchers";
import { getGermanDate } from "@/lib/utils/germanDate";

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <main className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1 className="text-3xl font-bold">BLOG</h1>

      <section className="py-10">
        <h2>Latest Blogs</h2>

        <div className="py-2">
          {blogs.map((blog) => (
            <Link
              className="no-underline"
              href={"/blog/" + blog.slug}
              key={blog.slug}
              passHref
            >
              <div className="my-5 flex justify-between rounded-lg px-6 py-2 align-middle transition-colors duration-300 hover:bg-danger/20">
                <div>
                  <h3 className="my-1">{blog.frontmatter.title}</h3>
                  <p className="my-1 text-gray-400">
                    {blog.frontmatter.description}
                  </p>
                </div>
                <div className="my-auto flex flex-col items-end text-gray-400">
                  <p className="my-1">
                    {getGermanDate(blog.frontmatter.publishDate)}
                  </p>
                  <p className="my-1 text-gray-400">
                    {blog.frontmatter.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
