import type { Blog } from "@/../types";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryBadge from "./CategoryBadge";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  blog: Blog; // todo: rename to BlogPost
};

export default function BlogCard({ blog }: BlogCardProps) {
  const { frontmatter, slug } = blog;
  const { title, description, author, pubDate, image, category } = frontmatter;

  return (
    <Card>
      <CardHeader>
        <div className="flex text-sm font-semibold">
          <CategoryBadge>{category.toUpperCase()}</CategoryBadge>
        </div>
        <Link href={`/blog/${slug}`}>
          <Image
            src={image?.src}
            alt={image?.alt}
            width={1280}
            height={200}
            className="my-0"
          />
        </Link>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="my-0">
          <span>{formatDate(pubDate, "de-DE")}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xl text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}
