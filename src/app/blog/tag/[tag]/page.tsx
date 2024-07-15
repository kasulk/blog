import { Metadata } from "next";
import { H2 } from "@/components/Headings";
import { PageHeader, BlogPostsList } from "@/components";
import { capitalize } from "@/lib/utils";
import { siteConfig } from "@/config";
import { getBlogs, getBlogsByTag } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import {
  Sidebar,
  SidebarContent,
  BlogCategoryCloud,
  BlogTagsCloud,
} from "@/components/Sidebar";

type TagPageProps = {
  params: { tag: string };
};

export default async function CategoryPage({ params }: TagPageProps) {
  const { tag } = params;
  const blogsByTag = await getBlogsByTag(tag);
  const formattedBlogs = formatBlogs(blogsByTag);

  return (
    <>
      <PageHeader>Blog</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <section className="flex-1">
          <H2 className="flex flex-col">
            <span>Letzte Blogs mit dem Tag</span>
            <span className="text-accent">{tag.toUpperCase()}</span>
          </H2>
          <BlogPostsList blogs={formattedBlogs} />
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
}: TagPageProps): Promise<Metadata> {
  const tag = capitalize(params.tag);

  return {
    title: `${tag} | ${siteConfig.name}`,
    description: `Hier findest du eine Liste der Blog-Posts mit dem Tag ${tag}`,
    authors: { name: siteConfig.owner },
  };
}
