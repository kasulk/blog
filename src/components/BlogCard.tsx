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
          {/*// todo: turn to button */}
          <span className="rounded-sm bg-accent px-3 py-1 text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80">
            {category.toUpperCase()}
          </span>
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
