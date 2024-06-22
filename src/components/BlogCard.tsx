import type { BlogPost } from "@/../types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/Links";
import { CategoryBadge, CharCounter } from "@/components";
import { formatDate, createImageCreditsTag, truncify } from "@/lib/utils";
import { siteConfig } from "@/config";

type BlogCardProps = {
  blog: BlogPost;
};

const isDevMode = process.env.NODE_ENV === "development";
const showCharCounter = isDevMode && siteConfig.vgWort.showCharCounterInDevMode;

export function BlogCard({ blog }: BlogCardProps) {
  const { content, frontmatter, slug } = blog;
  const { title, description, author, pubDate, image, category } = frontmatter;
  const blogImageDir = siteConfig.dir.blogImages;

  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <Link href={`/blog/category/${category}`} className="flex">
          <CategoryBadge className="rounded-b-none">{category}</CategoryBadge>
        </Link>
        <Link href={`/blog/${slug}`} className="relative h-36 sm:h-48">
          <Image
            src={`${blogImageDir}/${image?.file}`}
            alt={image?.alt}
            title={image.credits && createImageCreditsTag(image.credits)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="my-0 object-cover"
          />
          {showCharCounter && (
            <CharCounter
              className="absolute -bottom-6 -right-4"
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
        <CardDescription className="my-0 flex flex-col sm:flex-row sm:space-x-2">
          <span className="whitespace-nowrap">{formatDate(pubDate)}</span>
          <span className="hidden sm:inline-block">•</span>
          <Link href="/aboutme" className="whitespace-nowrap">
            {author === "icke" ? siteConfig.owner : author}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg text-muted-foreground sm:text-xl">
        {description && truncify(description)}
      </CardContent>
    </Card>
  );
}
