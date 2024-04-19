export type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
};

export type Blog = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
};
