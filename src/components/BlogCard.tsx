import type { BlogPost } from "@/../types";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CategoryBadge } from "@/components";
import { formatDate, createImageCreditsTag } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
        <Link href={`/blog/category/${category}`} className="flex no-underline">
          <CategoryBadge className="rounded-b-none">{category}</CategoryBadge>
        </Link>
        <Link
          href={`/blog/${slug}`}
          className="relative h-36 no-underline sm:h-48"
        >
          <Image
            src={`${blogImageDir}/${image?.file}`}
            alt={image?.alt}
            title={image.credits && createImageCreditsTag(image.credits)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="my-0 object-cover"
          />
        </Link>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="my-0 flex flex-col sm:flex-row sm:space-x-2">
          <span className="whitespace-nowrap">
            {formatDate(pubDate, "de-DE")}
          </span>
          <span className="hidden sm:inline-block">•</span>
          <Link href="#" className="whitespace-nowrap no-underline">
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
