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

export async function getBlogBySlug(slug: string): Promise<GetBlogResult> {
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

export async function getBlogs(): Promise<GetBlogResult[]> {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );

  return blogs;
}
