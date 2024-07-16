import type { BlogPost } from "@/../types";
import { getBlogs } from "./getBlogs";

/**
 * Fetches all blog posts with a given tag.
 *
 * This function fetches all blog posts and filters them based on the given tag,
 * returning only those blog posts that include the tag in their frontmatter.
 *
 * @param {string} tag - The tag to filter blog posts by.
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of blog posts containing the specified tag.
 */
export async function getBlogsByTag(tag: string): Promise<BlogPost[]> {
  const allBlogs = await getBlogs();
  const blogsByTag = allBlogs.filter((blog) => {
    const { frontmatter } = blog;
    return frontmatter.tags?.includes(tag);
  });

  return blogsByTag;
}
