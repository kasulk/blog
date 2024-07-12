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

export async function getBlogs(): Promise<BlogPost[]> {
  const allFilePaths = getAllFilesFromSubDirs(blogDir);
  const allBlogs = await Promise.all(
    allFilePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  checkForDuplicateSlugs(allBlogs);
  checkForDuplicateVGWortCodes(allBlogs);

  return allBlogs;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((blog) => blog.slug === slug);

  return blog || null;
}

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

export function getTagsWithCounts(blogs: BlogPost[]): {
  [key: string]: number;
} {
  const tagsWithCounts: { [key: string]: number } = {};

  blogs.forEach((blog) => {
    const { frontmatter } = blog;
    const tags = frontmatter.tags || [];
    const autoTags = getAutoTags(frontmatter);

    const allTags = [...new Set([...tags, ...autoTags])];

    allTags.forEach((tag) => {
      if (tagsWithCounts[tag]) tagsWithCounts[tag]++;
      else tagsWithCounts[tag] = 1;
    });
  });

  return sortObjectKeys(tagsWithCounts);
}

function getAutoTags(frontmatter: Frontmatter): string[] {
  return [...getAutoTagsFromCodeChallenge(frontmatter)];
}

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
