import Link from "next/link";

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
            <Link
              href={`blog/${blog}`}
              className="whitespace-nowrap text-accent"
            >
              &rarr; Blog-Artikel lesen
            </Link>
          </div>
        )}
      </div>
    )
  );
}
