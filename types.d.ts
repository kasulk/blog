export type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
  description?: string;
};

export type Blog = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
};
