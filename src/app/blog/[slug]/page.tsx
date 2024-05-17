import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, CustomStyledMDX, BlogRelatedPosts } from "@/components";
import { BlogPostHeader } from "@/components/BlogPostPage";
import { siteConfig } from "@/config";
import { getBlogBySlug, getBlogs } from "../blogFetchers";

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

      <article>
        <BlogPostHeader frontmatter={frontmatter} />
        <CustomStyledMDX
          source={content}
          options={{ scope: { ...frontmatter } }}
        />
        <footer>
          <BlogRelatedPosts {...params} category={category} />
        </footer>
      </article>
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
