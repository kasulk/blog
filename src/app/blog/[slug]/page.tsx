import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "../blogFetchers";

type BlogPageProps = {
  params: { slug: string };
};

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) notFound();

  const { frontmatter, content } = blog;
  const { title, author, publishDate } = frontmatter;

  return (
    /// To style MD properly, add 'prose' class
    <article className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1>{title}</h1>
      <p className="flex justify-end space-x-1">
        <span>by {author}, </span>
        <span>{publishDate}</span>
      </p>
      <div>{content}</div>
    </article>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
