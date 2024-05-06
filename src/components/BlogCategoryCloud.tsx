import Link from "next/link";
import { CategoryBadge } from "@/components";
import { siteConfig } from "@/config/site";
import { getBlogs, getCategoriesWithCounts } from "@/app/blog/blogFetchers";
import { formatBlogs } from "@/app/blog/formatBlogs";
import { slugify } from "@/lib/utils";

export default async function BlogCategoryCloud() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);
  const categoriesWithCounts = getCategoriesWithCounts(formattedBlogs);

  return (
    <ul className="flex list-none">
      {Object.entries(categoriesWithCounts).map(([category, count], i) => (
        <li key={`category-${i + 1}`}>
          <Link
            className="no-underline"
            href={`/category/${slugify(category)}/`}
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
