import type { Platform } from "@/config/links";
import type { StrippedApiData } from "@/lib/apiFetchers/types";

export type Frontmatter = {
  title: string | null;
  author: string | null;
  pubDate: Date;
  description: string | null;
  image: BlogPostImage | string | null;
  isDraft: boolean | null;
  category: "coden" | "finanzen" | "verschiedenes";
  tags?: string[];
  series?: string;
  vgWortCode: string;
  type: string;
  codeChallengeData?: CodeChallengeData;
};

export type FrontmatterWithApiData = Frontmatter & {
  apiData: StrippedApiData;
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
  platform: Platform;
  language: string;
};

export type AffiliateType = "order" | "register";
