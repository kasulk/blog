import Link from "next/link";
import { Metadata } from "next";
import { getBlogs } from "./blogFetchers";
import { siteConfig } from "@/config/site";
import { cn, formatDate } from "@/lib/utils";
import { formatBlogs } from "./formatBlogs";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

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
        <h2 className="text-3xl">Letzte Blogs</h2>
        <ul className="list-none py-2 pl-0">
          {formattedBlogs.map((blog) => {
            const { frontmatter, slug } = blog;
            const { title, description, author, pubDate, image, category } =
              frontmatter;

            return (
              <li
                key={`blogs-li-${slug}`}
                className="my-5 flex list-none justify-between rounded-lg px-6 py-2 align-middle duration-300"
              >
                <article>
                  <div className="flex text-sm font-semibold">
                    <span className="rounded-sm bg-accent px-3 py-1 text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80">
                      {category.toUpperCase()}
                    </span>
                  </div>
                  <Link href={`/blog/${slug}`}>
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      width={1280}
                      height={200}
                      className="my-0"
                    />
                  </Link>
                  <div className="flex flex-col items-start space-y-2">
                    <h3 className="mb-1 text-2xl">{title}</h3>
                    <div className="flex text-muted-foreground">
                      <span className="">{formatDate(pubDate, "de-DE")}</span>
                      <span className="mx-2">•</span>
                      <span className="">{author}</span>
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link className="no-underline" href={`/blog/${slug}`}>
                      <div
                        className={cn(
                          buttonVariants({ variant: "default", size: "lg" }),
                          "hover: bg-accent text-white hover:text-background",
                        )}
                      >
                        Lies mich
                      </div>
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
