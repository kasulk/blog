import type { BlogPost } from "@/../types";
import path from "path";
import { siteConfig } from "@/config";
import {
  checkForDuplicateSlugs,
  checkForDuplicateVGWortCodes,
  getAllFilesFromSubDirs,
  getBlogByFilePath,
} from "@/lib/blogFetchers/utils";
import { addAutoTagsToFrontmatters } from "./utils/addAutoTagsToFrontmatters";

const blogDir = path.join(process.cwd(), siteConfig.dir.blogs);

/**
 * Retrieves all blog posts from the specified blog directory.
 *
 * This function reads all files from the subdirectories within the blog directory,
 * processes each file to extract blog post data, checks for duplicate slugs and VG Wort codes,
 * and adds automatic tags to the frontmatter of each blog post.
 *
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of processed blog posts.
 */
export async function getBlogs(): Promise<BlogPost[]> {
  const allFilePaths = getAllFilesFromSubDirs(blogDir);
  const allBlogs = await Promise.all(
    allFilePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  checkForDuplicateSlugs(allBlogs);
  checkForDuplicateVGWortCodes(allBlogs);
  const allBlogsWithAutoTags = addAutoTagsToFrontmatters(allBlogs);

  return allBlogsWithAutoTags;
}
