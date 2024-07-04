import type { BlogPost } from "@/../types";
import { BlogPostImage, CategoryBadge, ReadingTime } from "@/components";
import { Link, AuthorLink } from "@/components/Links";
import { siteConfig } from "@/config";
import { formatDate } from "@/lib/utils";

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
        <BlogPostImage frontmatter={frontmatter} />
      </div>

      <div className="mb-1 mt-4 flex justify-end space-x-1">
        <AuthorLink author={author} />
        <span className="space-x-2">|</span>
        <span>{formatDate(pubDate)}</span>
      </div>
      <ReadingTime text={content} />
    </header>
  );
}
