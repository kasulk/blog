import { Metadata } from "next";
import { H2 } from "@/components/Headings";
import { PageHeader, BlogPostsList } from "@/components";
import {
  Sidebar,
  SidebarContent,
  BlogCategoryCloud,
} from "@/components/Sidebar";
import { getBlogs } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: `Mein Blog | ${siteConfig.name}`,
  description: "Hier findest du eine Liste meiner letzten Blog-Posts",
};

export default async function Blog() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);

  return (
    <>
      <PageHeader>Blog</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <section className="flex-1">
          <H2>Letzte Blogs</H2>
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
