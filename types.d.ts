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
  codeChallengeData?: CodeChallengeData;
};

export type ApiData = {
  [key: string]: unknown;
};

export type FrontmatterWithApiData = Frontmatter & {
  apiData?: ApiData;
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

type CodeChallengeData = {
  id: string;
  platform: string;
  language: string;
};

export type AffiliateType = "order" | "register";
