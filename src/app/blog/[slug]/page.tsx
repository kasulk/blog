import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "../blogFetchers";
import { CustomStyledMDX } from "@/components";
import { formatDate } from "@/lib/utils/formatDate";

type BlogPageProps = {
  params: { slug: string };
};

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) notFound();

  const { content, frontmatter } = blog;
  const { title, author, publishDate } = frontmatter;

  return (
    <article className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1>{title}</h1>
      <p className="flex justify-end space-x-1">
        <span>by {author}, </span>
        <span>{formatDate(publishDate, "de-DE")}</span>
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
