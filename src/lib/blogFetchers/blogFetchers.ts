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
 * Calculates the counts of each tag from an array of blog posts.
 *
 * This function iterates over all blog posts, extracts the tags from their frontmatter,
 * and counts the occurrences of each tag. The resulting object contains tags as keys and their counts as values.
 * The object keys are sorted before being returned.
 *
 * @param {BlogPost[]} blogs - An array of blog posts to extract tags from.
 * @returns {Object<string, number>} An object where the keys are tags and the values are their respective counts.
 */
export function getTagsWithCounts(blogs: BlogPost[]): {
  [key: string]: number;
} {
  const tagsWithCounts: { [key: string]: number } = {};

  blogs.forEach(({ frontmatter }) => {
    const allTags = frontmatter.tags || [];

    allTags.forEach((tag) => {
      if (tagsWithCounts[tag]) tagsWithCounts[tag]++;
      else tagsWithCounts[tag] = 1;
    });
  });

  return sortObjectKeys(tagsWithCounts);
}

/**
 * Adds automatically generated tags to the frontmatter of each blog post.
 *
 * This function iterates over each blog post, generates automatic tags based on the frontmatter,
 * and combines them with existing tags. If any redundant tags are found, it throws an error.
 * The resulting blog posts contain updated frontmatter with all tags.
 *
 * @param {BlogPost[]} blogs - An array of blog posts to process.
 * @returns {BlogPost[]} An array of blog posts with updated frontmatter including automatic tags.
 *
 * @throws {Error} Throws an error if a redundant tag is found in the auto-generated tags.
 */
function addAutoTagsToFrontmatters(blogs: BlogPost[]): BlogPost[] {
  return blogs.map((blog) => {
    const { frontmatter } = blog;
    const { codeChallengeData } = frontmatter;
    const tags = frontmatter.tags || [];
    const autoTags = getAutoTags(frontmatter);

    tags.forEach((tag) => {
      if (autoTags.includes(tag)) {
        throwRedundantTagError(tag, codeChallengeData);
      }
    });

    const allTags = [...new Set([...tags, ...autoTags])];

    return { ...blog, frontmatter: { ...frontmatter, tags: allTags } };
  });
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
