import type { BlogPost } from "@/../types";
import Image from "next/image";
import { CategoryBadge } from "@/components";
import { Link } from "@/components/Links";
import { siteConfig } from "@/config";
import { createImageCreditsTag, formatDate, getReadingTime } from "@/lib/utils";
import { ReadingTime } from "../ReadingTime";

type Props = {
  blog: BlogPost;
};

const blogImageDir = siteConfig.dir.blogImages;

export function BlogPostHeader({ blog }: Props) {
  const { frontmatter, content } = blog;
  const { author, pubDate, image, category } = frontmatter;

  return (
    <header>
      <Link href={`/blog/category/${category}`} className="flex">
        <CategoryBadge className="rounded-b-none">{category}</CategoryBadge>
      </Link>

      <div className="relative h-36 sm:h-48">
        <Image
          src={`${blogImageDir}/${image?.file}`}
          alt={image?.alt}
          title={image.credits && createImageCreditsTag(image.credits)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="my-0 rounded-t-sm object-cover"
        />
      </div>

      <div className="mb-1 mt-4 flex justify-end space-x-1">
        <Link href="/aboutme">
          {author === "icke" ? siteConfig.owner : author}
        </Link>
        <span className="space-x-2">|</span>
        <span>{formatDate(pubDate)}</span>
      </div>
      <ReadingTime text={content} />
    </header>
  );
}
