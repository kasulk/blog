import type { SearchParams } from "@/../types";
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

type Props = {
  searchParams: Partial<SearchParams>;
};

const { PER_PAGE } = siteConfig.blog.pagination;

export async function generateMetadata({ searchParams }: Props) {
  const page = Number(searchParams.page ?? 1);

  return {
    title: `Letzte Blogs | ${siteConfig.name} | Seite ${page}`,
    description: "Hier findest du eine Liste meiner letzten Blog-Posts",
  };
}

// static generation of first paginated page (i.e. if there are no `searchParams`)
export async function generateStaticParams() {
  return [{}]; // first page (/blog) has no `searchParams`
}

// dynamic generation for all other paginated pages (with `searchParams`)
export const dynamic = "force-dynamic";

export default async function AllBlogPostsPage({ searchParams }: Props) {
  try {
    const blogs = await getBlogs();
    if (!blogs || !blogs.length) throw new Error("No blogs found");

    const formattedBlogs = formatBlogs(blogs);

    // pagination
    const page = Number(searchParams.page ?? 1);
    const per_page = Number(searchParams.per_page ?? PER_PAGE);
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
  } catch (error) {
    console.error("Error in AllBlogPostsPage:", error);
    return (
      <>
        <PageHeader>Blog</PageHeader>
        <div>Fehler beim Laden der Blogs. Bitte versuche es später erneut.</div>
      </>
    );
  }
}
