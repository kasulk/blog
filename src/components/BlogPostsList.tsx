import type { BlogPost } from "@/../types";
import { BlogCard } from "@/components";

type BlogPostsListProps = {
  blogs: BlogPost[];
};

export function BlogPostsList({ blogs }: BlogPostsListProps) {
  return (
    <ul className="list-none py-2 pl-0">
      {blogs.map((blog) => (
        <li
          key={`blogs-li-${blog.slug}`}
          className="my-5 flex list-none justify-between rounded-lg py-2 ps-0 align-middle duration-300"
        >
          <BlogCard blog={blog} />
        </li>
      ))}
    </ul>
  );
}
