export type Frontmatter = {
  title: string;
  author: string;
  pubDate: Date;
  description?: string;
  isPublished: boolean;
};

export type Blog = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
};
