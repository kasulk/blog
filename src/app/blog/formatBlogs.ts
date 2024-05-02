import type { BlogPost } from "@/../types";

type formatBlogsOptions = {
  filterOutDrafts?: boolean;
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number | null;
};

export function formatBlogs(
  blogs: BlogPost[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = null,
  }: formatBlogsOptions = {},
): BlogPost[] {
  // filter drafts/future posts
  const filteredBlogs = blogs.reduce<BlogPost[]>((acc, blog) => {
    const { pubDate, isPublished } = blog.frontmatter;
    if (filterOutDrafts && !isPublished) return acc;
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;
    acc.push(blog);
    return acc;
  }, []);

  // sort
  if (sortByDate) {
    filteredBlogs.sort((a, b) => {
      const dateA = a.frontmatter.pubDate.getTime();
      const dateB = b.frontmatter.pubDate.getTime();
      return dateB - dateA;
    });
  } else filteredBlogs.sort(() => Math.random() - 0.5);

  // limit
  if (limit) return filteredBlogs.slice(0, limit);
  return filteredBlogs;
}
