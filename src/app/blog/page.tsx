import Link from "next/link";
import { Metadata } from "next";
import { getBlogs } from "./blogFetchers";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { formatBlogs } from "./formatBlogs";

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

      <section className="py-10">
        <h2>Letzte Blogs</h2>
        <ul className="list-none py-2 pl-0">
          {formattedBlogs.map((blog) => {
            const { frontmatter, slug } = blog;
            const { title, description, author, pubDate } = frontmatter;

            return (
              <Link
                className="no-underline"
                href={`/blog/${slug}`}
                key={slug}
                passHref
              >
                <li className="my-5 flex list-none justify-between rounded-lg px-6 py-2 align-middle transition-colors duration-300 hover:bg-danger/20">
                  <div>
                    <h3 className="my-1">{title}</h3>
                    <p className="my-1 text-gray-400">{description}</p>
                  </div>
                  <div className="my-auto flex flex-col items-end text-gray-400">
                    <p className="my-1">{formatDate(pubDate, "de-DE")}</p>
                    <p className="my-1 text-gray-400">{author}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
