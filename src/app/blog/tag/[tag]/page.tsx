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
import { getBlogs, getBlogsByTag } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";

type BlogsByTagPageProps = {
  params: { tag: string };
  searchParams: SearchParams;
};

export default async function BlogsByTagPage({
  params,
  searchParams,
}: BlogsByTagPageProps) {
  const { tag } = params;
  const blogsByTag = await getBlogsByTag(tag);
  const formattedBlogs = formatBlogs(blogsByTag);

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
            <span>Letzte Blogs mit dem Tag</span>
            <span className="text-accent">{tag.toUpperCase()}</span>
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

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const blogs = await getBlogs();
  const tags = blogs.flatMap((blog) => blog.frontmatter.tags ?? []);
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: BlogsByTagPageProps): Promise<Metadata> {
  const tag = capitalize(params.tag);

  return {
    title: `${tag} | ${siteConfig.name}`,
    description: `Hier findest du eine Liste der Blog-Posts mit dem Tag ${tag}`,
    authors: { name: siteConfig.owner },
  };
}
