export type Frontmatter = {
  title: string;
  author: string;
  pubDate: Date;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  isPublished: boolean;
  category: string;
  tags: string[];
  series?: string;
};

export type Blog = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
};
