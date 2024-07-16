import type { BlogPost } from "@/../types";
import { getBlogs } from "./getBlogs";

/**
 * Fetches a blog post by its slug.
 *
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<BlogPost | null>} A promise that resolves to the blog post if found, otherwise null.
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((blog) => blog.slug === slug);

  return blog || null;
}
