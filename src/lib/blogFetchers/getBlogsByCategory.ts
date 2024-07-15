import type { BlogPost } from "@/../types";
import { getBlogs } from "./getBlogs";

/**
 * Fetches all blog posts in a given category.
 *
 * @param {string} category - The category to filter blog posts by.
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of blog posts in the given category.
 */
export async function getBlogsByCategory(
  category: string,
): Promise<BlogPost[]> {
  const allBlogs = await getBlogs();
  const blogsByCategory = allBlogs.filter((blog) => {
    const { frontmatter } = blog;
    return frontmatter.category.toLowerCase() === category.toLowerCase();
  });

  return blogsByCategory;
}
