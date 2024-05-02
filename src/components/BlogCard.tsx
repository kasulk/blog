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
import CategoryBadge from "./CategoryBadge";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  blog: BlogPost;
};

export default function BlogCard({ blog }: BlogCardProps) {
  const { frontmatter, slug } = blog;
  const { title, description, author, pubDate, image, category } = frontmatter;

  return (
    <Card>
      <CardHeader>
        <div className="flex text-sm font-semibold">
          <CategoryBadge className="rounded-b-none">
            {category.toUpperCase()}
          </CategoryBadge>
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
        <CardDescription className="my-0 flex flex-col sm:flex-row">
          <span className="whitespace-nowrap">
            {formatDate(pubDate, "de-DE")}
          </span>
          <span className="mx-2 hidden sm:inline-block">•</span>
          <Link href="#" className="whitespace-nowrap no-underline">
            {author}
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
