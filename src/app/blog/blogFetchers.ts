import type { Blog, Frontmatter } from "@/../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site";

const blogDir = siteConfig.dir.blogs;

export async function getBlogs(): Promise<Blog[]> {
  const allFilePaths = getAllFilesFromSubDirs(blogDir);
  const allBlogs = await Promise.all(
    allFilePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  return allBlogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((blog) => blog.slug === slug);

  return blog || null;
}

async function getBlogByFilePath(filePath: string): Promise<Blog> {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const slug = path.parse(filePath).name;
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as Frontmatter,
    content,
    slug,
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
