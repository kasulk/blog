import type { BlogPost, Frontmatter } from "@/../types";
import path from "path";
import { siteConfig } from "@/config";
import { sortObjectKeys } from "@/lib/utils";
import {
  checkForDuplicateSlugs,
  checkForDuplicateVGWortCodes,
  getAllFilesFromSubDirs,
  getBlogByFilePath,
} from "@/lib/blogFetchers/utils";
import { codeChallenge } from "@/config/links";

const blogDir = path.join(process.cwd(), siteConfig.dir.blogs);

/**
 * Fetches all blog posts from the blog directory.
 *
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of blog posts.
 */
export async function getBlogs(): Promise<BlogPost[]> {
  const allFilePaths = getAllFilesFromSubDirs(blogDir);
  const allBlogs = await Promise.all(
    allFilePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  checkForDuplicateSlugs(allBlogs);
  checkForDuplicateVGWortCodes(allBlogs);

  return allBlogs;
}

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

/**
 * Generates an object with tags as keys and the count of blog posts with each tag as values.
 *
 * @param {BlogPost[]} blogs - An array of blog posts.
 * @returns {{ [key: string]: number }} An object where keys are tags and values are counts.
 */
export function getTagsWithCounts(blogs: BlogPost[]): {
  [key: string]: number;
} {
  const tagsWithCounts: { [key: string]: number } = {};

  blogs.forEach((blog) => {
    const { frontmatter } = blog;
    const { codeChallengeData } = frontmatter;
    const tags = frontmatter.tags || [];
    const autoTags = getAutoTags(frontmatter);

    tags.forEach((tag) => {
      if (autoTags.includes(tag))
        throwRedundantTagError(tag, codeChallengeData);
    });

    const allTags = [...new Set([...tags, ...autoTags])];

    allTags.forEach((tag) => {
      if (tagsWithCounts[tag]) tagsWithCounts[tag]++;
      else tagsWithCounts[tag] = 1;
    });
  });

  return sortObjectKeys(tagsWithCounts);
}

/**
 * Generates an array of automatically derived tags from the frontmatter.
 *
 * @param {Frontmatter} frontmatter - The frontmatter of a blog post.
 * @returns {string[]} An array of automatically derived tags.
 */
function getAutoTags(frontmatter: Frontmatter): string[] {
  return [...getAutoTagsFromCodeChallenge(frontmatter)];
}

/**
 * Generates an array of automatically derived tags based on code challenge data in the frontmatter.
 *
 * @param {Frontmatter} frontmatter - The frontmatter of a blog post.
 * @returns {[string, string] | []} An array containing the platform and language tags if code challenge data is present, otherwise an empty array.
 */
function getAutoTagsFromCodeChallenge(
  frontmatter: Frontmatter,
): [string, string] | [] {
  const { codeChallengeData } = frontmatter;

  if (codeChallengeData) {
    const { platform, language } = codeChallengeData;
    return [platform.toLowerCase(), language.toLowerCase()];
  }

  return [];
}

/**
 * Throws an error indicating a redundant tag that is automatically generated from the code challenge data.
 *
 * @param {string} redundantTag - The redundant tag that was manually added.
 * @param {Frontmatter["codeChallengeData"]} codeChallengeData - The code challenge data from which the tag is automatically generated.
 * @throws {Error} Throws an error with a detailed message about the redundant tag.
 */
function throwRedundantTagError(
  redundantTag: string,
  codeChallengeData: Frontmatter["codeChallengeData"],
): never {
  throw new Error(`

  No need to tag the article with '${redundantTag}'
  because it's tagged automatically from it's codeChallengeData:\n
  codeChallengeData: ${JSON.stringify(codeChallengeData, null, 4)} `);
}
