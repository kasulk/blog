export type Frontmatter = {
  title: string;
  author: string;
  pubDate: Date;
  description?: string;
  image: {
    fileName: string;
    alt: string;
    credits?: {
      creator?: string;
      source?: string;
    };
  };
  isPublished: boolean;
  category: string;
  tags: string[];
  series?: string;
};

export type BlogPost = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
};
