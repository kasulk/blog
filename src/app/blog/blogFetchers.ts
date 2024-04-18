// import type { JSXElementConstructor, ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
};

type Blog = {
  markdownWithFrontmatter: string;
  frontmatter: Frontmatter;
  // content: ReactElement<any, string | JSXElementConstructor<any>>;
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
  const frontmatter = await getFrontmatterFromFileContent(fileContent);
  const slug = path.parse(filePath).name;

  return {
    markdownWithFrontmatter: fileContent,
    frontmatter,
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

/// Helper to extract the frontmatter from the file content
async function getFrontmatterFromFileContent(
  fileContent: string,
): Promise<Frontmatter> {
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
}
