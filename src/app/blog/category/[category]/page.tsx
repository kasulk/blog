import { Metadata } from "next";
import { BlogPageHeader, BlogPostsList } from "@/components";
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
    <>
      <BlogPageHeader />
      <h2 className="mb-0 flex flex-col text-2xl sm:mb-2 md:text-3xl">
        <span>Letzte Blogs in der Kategorie</span>
        <span className="text-accent">{category.toUpperCase()}</span>
      </h2>
      <BlogPostsList blogs={formattedBlogs} />
    </>
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
