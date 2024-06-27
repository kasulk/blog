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
  vgWortCode?: string;
  type: string;
  codingChallengeData?: CodingChallengeData;
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

type CodingChallengeData = {
  platform: string;
  id?: string;
  title: string;
};

export type AffiliateType = "order" | "register";
