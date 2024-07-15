import type { BlogPost } from "@/../types";
import { sortObjectKeys } from "../utils";

/**
 * Generates an object with categories as keys and the count of blog posts in each category as values.
 *
 * @param {BlogPost[]} blogs - An array of blog posts.
 * @returns {{ [key: string]: number }} An object where keys are categories and values are counts.
 */
export function getCategoriesWithCounts(blogs: BlogPost[]): {
  [key: string]: number;
} {
  const catsWithCounts: { [key: string]: number } = {};

  blogs.forEach((blog) => {
    const category = blog.frontmatter.category;

    if (catsWithCounts[category]) catsWithCounts[category]++;
    else catsWithCounts[category] = 1;
  });

  return sortObjectKeys(catsWithCounts);
}
