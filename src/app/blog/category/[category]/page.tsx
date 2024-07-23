import type { SearchParams } from "@/../types";
import { Metadata } from "next";
import { H2 } from "@/components/Headings";
import { PageHeader, BlogPostsList, PaginationControls } from "@/components";
import {
  Sidebar,
  SidebarContent,
  BlogCategoryCloud,
  BlogTagsCloud,
} from "@/components/Sidebar";
import { siteConfig } from "@/config";
import { capitalize } from "@/lib/utils";
import { getBlogs, getBlogsByCategory } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";

type BlogsByCategoryPageProps = {
  params: { category: string };
  searchParams: SearchParams;
};

export default async function BlogsByCategoryPage({
  params,
  searchParams,
}: BlogsByCategoryPageProps) {
  const { category } = params;
  const blogsByCategory = await getBlogsByCategory(category);
  const formattedBlogs = formatBlogs(blogsByCategory);

  // pagination
  const page = Number(searchParams["page"] ?? "1");
  const per_page = Number(searchParams["per_page"] ?? "5");
  const start = (page - 1) * per_page;
  const end = start + per_page;

  const paginatedBlogs = formattedBlogs.slice(start, end);

  return (
    <>
      <PageHeader>Blog</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <section className="flex-1">
          <H2 className="flex flex-col">
            <span>Letzte Blogs in der Kategorie</span>
            <span className="text-accent">{category.toUpperCase()}</span>
          </H2>
          <PaginationControls
            numBlogPosts={formattedBlogs.length}
            hasPrevPage={start > 0}
            hasNextPage={end < formattedBlogs.length}
          />
          <BlogPostsList blogs={paginatedBlogs} />
          <PaginationControls
            numBlogPosts={formattedBlogs.length}
            hasPrevPage={start > 0}
            hasNextPage={end < formattedBlogs.length}
          />
        </section>

        <Sidebar>
          <SidebarContent title="Kategorien">
            <BlogCategoryCloud />
          </SidebarContent>
          <SidebarContent title="Tags">
            <BlogTagsCloud />
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
}: BlogsByCategoryPageProps): Promise<Metadata> {
  const category = capitalize(params.category);

  return {
    title: `${category} | ${siteConfig.name}`,
    description: `Hier findest du eine Liste der Blog-Posts in der Kategorie ${category}`,
    authors: { name: siteConfig.owner },
  };
}
