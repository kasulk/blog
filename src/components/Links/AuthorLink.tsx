import { Link } from "@/components/Links";
import { siteConfig } from "@/config";
import { getBlogPostAuthor, slugify } from "@/lib/utils";

type Props = {
  author: string | null;
};

const { owner } = siteConfig;

export function AuthorLink({ author }: Props) {
  author = getBlogPostAuthor(author, owner);
  const href = author === owner ? "/aboutme" : `/author/${slugify(author)}`;

  return (
    <Link href={href} className="whitespace-nowrap">
      {author}
    </Link>
  );
}
