import type { BlogPost, Frontmatter } from "@/../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getRelativePath } from ".";

export async function getBlogByFilePath(filePath: string): Promise<BlogPost> {
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
