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
import { getBlogs } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";

export const metadata: Metadata = {
  title: `Mein Blog | ${siteConfig.name}`,
  description: "Hier findest du eine Liste meiner letzten Blog-Posts",
};

type Props = {
  searchParams: SearchParams;
};

export default async function AllBlogPostsPage({ searchParams }: Props) {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);

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
          <H2 className="mb-12">Letzte Blogs</H2>
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
