import { Link, H2, H4 } from "@/components";
import { getBlogsByCategory } from "@/app/blog/blogFetchers";
import { formatBlogs } from "@/app/blog/formatBlogs";
import { getMonthAndYearFromDate, getRandomElements } from "@/lib/utils";
import { siteConfig } from "@/config";

type Props = {
  slug: string;
  category: string;
};

const NUM_RELATED_POSTS = 3;

export async function BlogRelatedPosts({ slug, category }: Props) {
  const blogs = await getBlogsByCategory(category);
  const otherBlogs = blogs.filter((blog) => blog.slug !== slug);
  const formattedBlogs = formatBlogs(otherBlogs, { sortByDate: false });
  const shuffledBlogs = getRandomElements(formattedBlogs, NUM_RELATED_POSTS);

  if (!shuffledBlogs.length) return;

  return (
    <>
      <hr className="flex sm:hidden" />
      <H2>Verwandte Posts</H2>
      <ul className="flex list-none flex-col ps-0">
        {shuffledBlogs.map((blog) => (
          <li
            key={`related-posts-${blog.slug}`}
            className="m-0 mb-1 mr-1 w-full bg-slate-100 p-4 dark:bg-slate-900/50"
          >
            <Link href={`/blog/${blog.slug}/`} className="hover:opacity-80">
              <H4 className="mt-0">{blog.frontmatter.title}</H4>
            </Link>
            <div className="flex justify-end space-x-1">
              <Link href="/aboutme">
                {blog.frontmatter.author === "icke"
                  ? siteConfig.owner
                  : blog.frontmatter.author}
              </Link>
              <span>|</span>
              <span>{getMonthAndYearFromDate(blog.frontmatter.pubDate)}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
