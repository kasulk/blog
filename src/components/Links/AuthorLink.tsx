import { Link } from "@/components/Links";
import { siteConfig } from "@/config";
import { slugify } from "@/lib/utils";

type Props = {
  author: string | null;
};

const { owner } = siteConfig;

export function AuthorLink({ author }: Props) {
  author = !author || author === "icke" ? owner : author;
  const href = author === owner ? "/aboutme" : `/author/${slugify(author)}`;

  return (
    <Link href={href} className="whitespace-nowrap">
      {author}
    </Link>
  );
}
