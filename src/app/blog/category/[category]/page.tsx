import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getBlogs, getBlogsByCategory } from "@/app/blog/blogFetchers";
import { formatBlogs } from "@/app/blog/formatBlogs";
import { capitalize } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type CategoryPageProps = {
  params: { category: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const blogsByCategory = await getBlogsByCategory(category);
  const formattedBlogs = formatBlogs(blogsByCategory);

  return (
    <main className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1 className="inline-block text-3xl font-black sm:text-4xl lg:text-5xl">
        Blog
      </h1>
      <section>
        <h2 className="mb-0 flex flex-col text-2xl sm:mb-2 md:text-3xl">
          <span>Letzte Blogs in der Kategorie</span>
          <span className="text-accent">{category.toUpperCase()}</span>
        </h2>
        <h2 className="mb-0 text-2xl text-accent sm:mb-2 md:text-3xl"></h2>
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

export async function generateStaticParams(): Promise<{ category: string }[]> {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ category: blog.frontmatter.category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = capitalize(params.category);

  return {
    title: `${category} | ${siteConfig.name}`,
    description: `Hier findest du eine Liste der Blog-Posts in der Kategorie ${category}`,
    authors: { name: siteConfig.owner },
  };
}
