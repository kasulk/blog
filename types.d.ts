export type Frontmatter = {
  title: string;
  author: string;
  pubDate: Date;
  description?: string;
  image: BlogPostImage;
  isDraft: boolean;
  category: string;
  tags: string[];
  series?: string;
};

export type BlogPost = {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
  relativeFilePath: string;
};

type BlogPostImage = {
  file: string;
  alt: string;
  credits?: {
    creator?: string;
    source?: string;
  };
};

export type AffiliateType = "order" | "register";
