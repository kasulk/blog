import type { BlogPost } from "@/../types";
import { Link } from "@/components/Links";
import { H4 } from "@/components/Headings";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import { getMonthAndYearFromDate } from "@/lib/utils";
import { siteConfig } from "@/config";

type Props = {
  relatedBlogs: BlogPost[];
};

const NUM_RELATED_POSTS = 3;

export async function BlogRelatedPosts({ relatedBlogs }: Props) {
  const formattedAndShuffledBlogs = formatBlogs(relatedBlogs, {
    sortByDate: false,
    limit: NUM_RELATED_POSTS,
  });

  return (
    <ul className="flex list-none flex-col gap-4 ps-0">
      {formattedAndShuffledBlogs.map(({ slug, frontmatter }) => {
        const { title, author, pubDate } = frontmatter;
        return (
          <li
            key={`related-posts-${slug}`}
            className="m-0 mb-1 mr-1 w-full bg-slate-100/20 px-1 dark:bg-slate-900/50"
          >
            <Link href={`/blog/${slug}/`} className="hover:opacity-80">
              <H4 className="mt-0 text-base sm:text-lg lg:text-xl">{title}</H4>
            </Link>
            <div className="flex flex-col items-end">
              <Link href="/aboutme" className="whitespace-nowrap">
                {!author || author === "icke" ? siteConfig.owner : author}
              </Link>
              <span className="whitespace-nowrap text-sm">
                {getMonthAndYearFromDate(pubDate)}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
