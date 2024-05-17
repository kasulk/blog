import path from "path";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link, PageHeader, CustomStyledMDX, CategoryBadge } from "@/components";
import { siteConfig } from "@/config";
import { getBlogBySlug, getBlogs } from "../blogFetchers";
import { createImageCreditsTag, formatDate } from "@/lib/utils";

type BlogPageProps = {
  params: { slug: string };
};

const blogImageDir = siteConfig.dir.blogImages;

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.frontmatter.isDraft) notFound();

  const { content, frontmatter } = blog;
  const { title, author, pubDate, image, category } = frontmatter;

  return (
    <article>
      <PageHeader>{title}</PageHeader>

      <Link href={`/blog/category/${category}`} className="flex">
        <CategoryBadge className="rounded-b-none">{category}</CategoryBadge>
      </Link>
      <div className="relative h-36 sm:h-48">
        <Image
          src={`${blogImageDir}/${image?.file}`}
          alt={image?.alt}
          title={image.credits && createImageCreditsTag(image.credits)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="my-0 rounded-t-sm object-cover"
        />
      </div>

      <p className="flex justify-end space-x-1">
        <Link href="/aboutme">
          {author === "icke" ? siteConfig.owner : author}
        </Link>
        <span className="space-x-2">|</span>
        <span>{formatDate(pubDate)}</span>
      </p>
      <CustomStyledMDX
        source={content}
        options={{ scope: { ...frontmatter } }}
      />
    </article>
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
