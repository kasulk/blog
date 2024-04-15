import Hello from "@/content/blogs/hello.mdx";
import { getBlogs } from "../blogFetchers";

type BlogPageProps = {
  params: string;
};

/// To style MD properly, add 'prose' class
export default async function BlogPage({ params }: BlogPageProps) {
  console.log("getBlogs():", await getBlogs());

  return (
    <article className="prose dark:prose-invert container mx-auto max-w-3xl py-6">
      <h1 className="text-success mb-2">Test</h1>
      <Hello />
    </article>
  );
}
