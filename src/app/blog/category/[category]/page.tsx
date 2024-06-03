import { Metadata } from "next";
import { PageHeader, H2, BlogPostsList } from "@/components";
import { capitalize } from "@/lib/utils";
import { siteConfig } from "@/config";
import { getBlogs, getBlogsByCategory } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import {
  Sidebar,
  SidebarContent,
  BlogCategoryCloud,
} from "@/components/Sidebar";

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

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <section className="flex-1">
          <H2 className="flex flex-col">
            <span>Letzte Blogs in der Kategorie</span>
            <span className="text-accent">{category.toUpperCase()}</span>
          </H2>
          <BlogPostsList blogs={formattedBlogs} />
        </section>

        <Sidebar>
          <SidebarContent title="Kategorien">
            <BlogCategoryCloud />
          </SidebarContent>
        </Sidebar>
      </div>
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
