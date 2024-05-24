import type { BlogPost, Frontmatter } from "@/../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config";
import { sortObjectKeys } from "@/lib/utils";

const blogDir = path.join(process.cwd(), siteConfig.dir.blogs);

export async function getBlogs(): Promise<BlogPost[]> {
  const allFilePaths = getAllFilesFromSubDirs(blogDir);
  const allBlogs = await Promise.all(
    allFilePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  checkForDuplicateSlugs(allBlogs);

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

async function getBlogByFilePath(filePath: string): Promise<BlogPost> {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const slug = path.parse(filePath).name;
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as Frontmatter,
    content,
    slug,
    relativeFilePath: getRelativePath(filePath),
  };
}

/// Helper to get all files from blog directory AND subdirectories
function getAllFilesFromSubDirs(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => path.join(directory, file.name));

  const directories = entries.filter((directory) => directory.isDirectory());

  const directoryFiles = directories.reduce<string[]>((all, dirEntry) => {
    const newDirPath = path.join(directory, dirEntry.name);
    return all.concat(getAllFilesFromSubDirs(newDirPath));
  }, []);

  return [...files, ...directoryFiles];
}

function checkForDuplicateSlugs(posts: BlogPost[]): void {
  const slugMap: { [slug: string]: BlogPost[] } = {};

  posts.forEach((post) => {
    if (!slugMap[post.slug]) slugMap[post.slug] = [];
    slugMap[post.slug].push(post);
  });

  const duplicateSlugs = Object.values(slugMap).filter(
    (posts) => posts.length > 1,
  );

  if (duplicateSlugs.length > 0) {
    let errorMessage = "Uh-oh... Duplicate slugs found!\n";

    duplicateSlugs.forEach((posts) => {
      errorMessage += "\n" + `${posts.length}x ${posts[0].slug}:` + "\n";
      errorMessage +=
        posts
          .map((post, i) => `${i + 1}. ${path.dirname(post.relativeFilePath)}`)
          .join("\n") + "\n";
    });
    errorMessage += "\nTo fix this, please rename the files above";

    throw new Error(errorMessage);
  }
}

function getRelativePath(filePath: string): string {
  const srcIndex = filePath.indexOf("/src/content/blogs") + "/src".length;

  if (srcIndex !== -1) return filePath.substring(srcIndex);
  return filePath;
}
