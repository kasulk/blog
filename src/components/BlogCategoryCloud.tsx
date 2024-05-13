import Link from "next/link";
import { CategoryBadge } from "@/components";
import { siteConfig } from "@/config";
import { getBlogs, getCategoriesWithCounts } from "@/app/blog/blogFetchers";
import { formatBlogs } from "@/app/blog/formatBlogs";
import { slugify } from "@/lib/utils";

export default async function BlogCategoryCloud() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);
  const categoriesWithCounts = getCategoriesWithCounts(formattedBlogs);

  return (
    <ul className="flex list-none flex-wrap ps-0">
      {Object.entries(categoriesWithCounts).map(([category, count], i) => (
        <li key={`category-${i + 1}`} className="m-0 mb-1 mr-1 p-0">
          <Link
            className="no-underline "
            href={`/blog/category/${slugify(category)}/`}
          >
            <CategoryBadge>
              <span>{category}</span>&nbsp;
              <span>{siteConfig.showCategoryCount && `(${count})`}</span>
            </CategoryBadge>
          </Link>
        </li>
      ))}
    </ul>
  );
}
