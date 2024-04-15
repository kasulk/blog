import type { JSXElementConstructor, ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
};

type GetBlogResult = {
  frontmatter: Frontmatter;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
  slug: string;
};

const contentDir = path.join(process.cwd(), "src/content/blogs");

export async function getBlogs(): Promise<GetBlogResult[]> {
  const filePaths = getFilesRecursively(contentDir);
  const blogs = await Promise.all(
    filePaths.map(async (path) => await getBlogByFilePath(path)),
  );

  return blogs;
}

export async function getBlogByFilePath(
  filePath: string,
): Promise<GetBlogResult> {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const slug = path.parse(filePath).name;

  return {
    frontmatter,
    content,
    slug,
  };
}

export async function getBlogBySlug(
  slug: string,
): Promise<GetBlogResult | null> {
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

export async function getBlogBySlug_(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}
