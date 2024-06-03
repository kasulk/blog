import type { BlogPost } from "@/../types";
import { Link, H4 } from "@/components";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import { getMonthAndYearFromDate } from "@/lib/utils";
import { siteConfig } from "@/config";

type Props = {
  relatedBlogs: BlogPost[];
};

const NUM_RELATED_POSTS = 5;

export async function BlogRelatedPosts({ relatedBlogs }: Props) {
  const formattedAndShuffledBlogs = formatBlogs(relatedBlogs, {
    sortByDate: false,
    limit: NUM_RELATED_POSTS,
  });

  return (
    <ul className="flex list-none flex-col gap-4 ps-0">
      {formattedAndShuffledBlogs.map((blog) => (
        <li
          key={`related-posts-${blog.slug}`}
          className="m-0 mb-1 mr-1 w-full bg-slate-100/20 px-1 dark:bg-slate-900/50"
        >
          <Link href={`/blog/${blog.slug}/`} className="hover:opacity-80">
            <H4 className="mt-0">{blog.frontmatter.title}</H4>
          </Link>
          <div className="flex flex-col items-end">
            <Link href="/aboutme" className="whitespace-nowrap">
              {blog.frontmatter.author === "icke"
                ? siteConfig.owner
                : blog.frontmatter.author}
            </Link>
            <span className="whitespace-nowrap text-sm">
              {getMonthAndYearFromDate(blog.frontmatter.pubDate)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
