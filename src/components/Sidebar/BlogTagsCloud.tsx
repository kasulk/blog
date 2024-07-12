import { Link } from "@/components/Links";
import { CategoryBadge } from "@/components";
import { siteConfig } from "@/config";
import { getBlogs, getTagsWithCounts } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import { slugify } from "@/lib/utils";

export async function BlogTagsCloud() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);
  const tagsWithCounts = getTagsWithCounts(formattedBlogs);

  return (
    <ul className="flex list-none flex-wrap ps-0">
      {Object.entries(tagsWithCounts).map(([tag, count], i) => (
        <li key={`tag-cloud-${slugify(tag)}`} className="m-0 mb-1 mr-1 p-0">
          <Link href={`/blog/tag/${slugify(tag)}/`}>
            <CategoryBadge className="text-xs sm:text-sm">
              <span>{tag}</span>&nbsp;
              <span>{siteConfig.showTagCount && `(${count})`}</span>
            </CategoryBadge>
          </Link>
        </li>
      ))}
    </ul>
  );
}
