import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, CustomStyledMDX, BackButton } from "@/components";
import {
  Sidebar,
  SidebarContent,
  BlogRelatedPosts,
  BlogCategoryCloud,
} from "@/components/Sidebar";
import { BlogPostHeader } from "@/components/BlogPostPage";
import { siteConfig } from "@/config";
import { getBlogBySlug, getBlogs } from "@/lib/blogFetchers/blogFetchers";

type BlogPageProps = {
  params: { slug: string };
};

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.frontmatter.isDraft) notFound();

  const { content, frontmatter } = blog;
  const { title, category } = frontmatter;

  return (
    <>
      <PageHeader>{title}</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
        <article className="w-full flex-1 flex-col">
          <BackButton />
          <BlogPostHeader frontmatter={frontmatter} />
          <CustomStyledMDX
            source={content}
            options={{ scope: { ...frontmatter } }}
          />
          <BackButton />
        </article>

        <Sidebar>
          <SidebarContent title="Kategorien">
            <BlogCategoryCloud />
          </SidebarContent>
          <SidebarContent title="Verwandte Posts">
            <BlogRelatedPosts {...params} category={category} />
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return {};

  const { frontmatter } = blog;

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", frontmatter.title);

  return {
    title: `${frontmatter.title} | ${siteConfig.name}`,
    description: frontmatter.description,
    authors: { name: frontmatter.author },

    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      url: path.join(process.cwd(), blog.slug),
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}
