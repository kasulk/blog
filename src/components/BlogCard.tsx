import type { BlogPost } from "@/../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, AuthorLink } from "@/components/Links";
import {
  BlogPostImage,
  CategoryBadge,
  CharCounter,
  ReadingTime,
} from "@/components";
import {
  createBlogPostDescription,
  formatDate,
  truncify,
  createBlogPostTitle,
} from "@/lib/utils";
import { siteConfig } from "@/config";
import { fetchCodeChallengeAPIs } from "@/lib/apiFetchers";

type BlogCardProps = {
  blog: BlogPost;
};

const blogImageDir = siteConfig.dir.blogImages;

const isDevMode = process.env.NODE_ENV === "development";
const showCharCounter = isDevMode && siteConfig.vgWort.showCharCounterInDevMode;

export async function BlogCard({ blog }: BlogCardProps) {
  const { content, frontmatter, slug } = blog;
  const { author, pubDate, category, codeChallengeData } = frontmatter;

  // get API data
  const apiData = codeChallengeData
    ? await fetchCodeChallengeAPIs(codeChallengeData)
    : null;

  const title = createBlogPostTitle(frontmatter, apiData);
  const description = createBlogPostDescription(frontmatter, apiData);

  return (
    <Card className="w-full">
      <CardHeader>
        <Link href={`/blog/category/${category}`} className="flex">
          <CategoryBadge className="rounded-b-none">{category}</CategoryBadge>
        </Link>
        <Link href={`/blog/${slug}`} className="relative h-36 sm:h-48">
          <BlogPostImage frontmatter={frontmatter} />
          {showCharCounter && (
            <CharCounter
              className="absolute h-auto rounded-sm opacity-80"
              mdxLength={content.length}
            />
          )}
        </Link>
        <CardTitle>
          <Link
            href={`/blog/${slug}`}
            className="text-foreground hover:text-foreground/80"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="flex flex-wrap justify-between">
          {/* use inline elements here only (no block elements), */}
          {/* for CardDescription is a <p>-element! */}
          <span className="my-0 flex flex-col sm:flex-row sm:space-x-2">
            <span className="whitespace-nowrap">{formatDate(pubDate)}</span>
            <span className="hidden sm:inline-block">•</span>
            <AuthorLink author={author} />
          </span>
          <ReadingTime text={content} />
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg text-muted-foreground sm:text-xl">
        {description && truncify(description)}
      </CardContent>
    </Card>
  );
}
