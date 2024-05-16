import type { BlogPost } from "@/../types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, CategoryBadge } from "@/components";
import { formatDate, createImageCreditsTag } from "@/lib/utils";
import { siteConfig } from "@/config";

type BlogCardProps = {
  blog: BlogPost;
};

export function BlogCard({ blog }: BlogCardProps) {
  const { frontmatter, slug } = blog;
  const { title, description, author, pubDate, image, category } = frontmatter;
  const blogImageDir = siteConfig.dir.blogImages;

  return (
    <Card className="w-full">
      <CardHeader>
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
          <span className="whitespace-nowrap">
            {formatDate(pubDate, "de-DE")}
          </span>
          <span className="hidden sm:inline-block">•</span>
          <Link href="/aboutme" className="whitespace-nowrap">
            {author === "icke" ? siteConfig.owner : author}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg text-muted-foreground sm:text-xl">
        {description && description.length > 200
          ? description.slice(0, 200) + "..."
          : description}
      </CardContent>
    </Card>
  );
}
