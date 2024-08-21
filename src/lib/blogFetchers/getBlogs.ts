import type { BlogPost } from "@/../types";
import fs from "fs";
import path from "path";
import {
  checkForDuplicateSlugs,
  checkForDuplicateVGWortCodes,
  getAllFilesFromSubDirs,
  getBlogByFilePath,
} from "@/lib/blogFetchers/utils";
import { addAutoTagsAndReadingTimeToFrontmatters } from "./utils/addAutoTagsToFrontmatters";

const blogDir = path.join(process.cwd(), "src/content/blogs");

/**
 * Retrieves all blog posts from the specified blog directory.
 *
 * This function reads all files from the subdirectories within the blog directory,
 * processes each file to extract blog post data, checks for duplicate slugs and VG Wort codes,
 * and adds automatically generated tags and reading time to the frontmatter of each blog post.
 *
 * @returns {Promise<BlogPost[]>} - A promise that resolves to an array of processed blog posts with updated frontmatter.
 *
 * @throws {Error} - Throws an error if the specified blog directory does not exist, if no blog files are found,
 *                   or if any duplicate slugs or VG Wort codes are detected among the blog posts.
 */
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogDir)) throwNoDirError(blogDir);

    const allFilePaths = getAllFilesFromSubDirs(blogDir);
    if (!allFilePaths.length) throw new Error("No blog files found.");

    const allBlogs = await Promise.all(
      allFilePaths.map(async (path) => await getBlogByFilePath(path)),
    );

    checkForDuplicateSlugs(allBlogs);
    checkForDuplicateVGWortCodes(allBlogs);

    return addAutoTagsAndReadingTimeToFrontmatters(allBlogs);
    //
  } catch (error) {
    console.error("Error in getBlogs:", error);
    return [];
  }
}

function throwNoDirError(blogDir: string): never {
  throw new Error(`Directory ${blogDir} does not exist.`);
}
