import type { JSXElementConstructor, ReactElement } from "react";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { customComponents } from "@/components/mdx-remote";

type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
};

type Content = ReactElement<any, string | JSXElementConstructor<any>>;

type Blog = {
  frontmatter: Frontmatter;
  content: Content;
  slug: string;
};

const blogDir = path.join(process.cwd(), "src/content/blogs");

export async function getBlogs(): Promise<Blog[]> {
  const filePaths = getFilesRecursively(blogDir);
  const blogs = await Promise.all(
    filePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  return blogs;
}

export async function getBlogByFilePath(filePath: string): Promise<Blog> {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const slug = path.parse(filePath).name;
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: customComponents,
  });

  return {
    frontmatter,
    content,
    slug,
  };
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((blog) => blog.slug === slug);

  return blog || null;
}

/// Helper to get all files from blog directory AND subdirectories
function getFilesRecursively(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => path.join(directory, file.name));

  const directories = entries.filter((directory) => directory.isDirectory());

  const directoryFiles = directories.reduce<string[]>((all, dirEntry) => {
    const newDirPath = path.join(directory, dirEntry.name);
    return all.concat(getFilesRecursively(newDirPath));
  }, []);

  return [...files, ...directoryFiles];
}
