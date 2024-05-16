import { Metadata } from "next";
import { PageHeader, H2, BlogPostsList } from "@/components";
import { getBlogs, getBlogsByCategory } from "@/app/blog/blogFetchers";
import { formatBlogs } from "@/app/blog/formatBlogs";
import { capitalize } from "@/lib/utils";
import { siteConfig } from "@/config";

type CategoryPageProps = {
  params: { category: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const blogsByCategory = await getBlogsByCategory(category);
  const formattedBlogs = formatBlogs(blogsByCategory);

  return (
    <>
      <PageHeader>Blog</PageHeader>

      <H2 className="flex flex-col">
        <span>Letzte Blogs in der Kategorie</span>
        <span className="text-accent">{category.toUpperCase()}</span>
      </H2>
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
