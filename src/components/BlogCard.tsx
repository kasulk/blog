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
import { formatDate, truncify } from "@/lib/utils";
import { siteConfig } from "@/config";

type Props = {
  blog: BlogPost;
};

const isDevMode = process.env.NODE_ENV === "development";
const showCharCounter = isDevMode && siteConfig.vgWort.showCharCounterInDevMode;

export async function BlogCard({ blog }: Props) {
  const { content, frontmatter, slug } = blog;
  const { title, author, description, pubDate, category, readingTime } =
    frontmatter;

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
          <ReadingTime time={readingTime} />
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg text-muted-foreground sm:text-xl">
        {description && truncify(description)}
      </CardContent>
    </Card>
  );
}
