import { Link } from "@/components/Links";

type Props = {
  description: string;
  blog: string;
};

export function AffiliateLinkListItemDesc({ description, blog }: Props) {
  return (
    description && (
      <div>
        <div dangerouslySetInnerHTML={{ __html: description }} />{" "}
        {blog && (
          <div className="flex justify-end">
            <Link href={`blog/${blog}`} className="whitespace-nowrap">
              &rarr; Blog-Artikel lesen
            </Link>
          </div>
        )}
      </div>
    )
  );
}
