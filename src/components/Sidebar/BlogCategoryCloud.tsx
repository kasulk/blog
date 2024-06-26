import { Link } from "@/components/Links";
import { CategoryBadge } from "@/components";
import { siteConfig } from "@/config";
import { getBlogs, getCategoriesWithCounts } from "@/lib/blogFetchers";
import { formatBlogs } from "@/lib/blogFetchers/utils";
import { slugify } from "@/lib/utils";

export async function BlogCategoryCloud() {
  const blogs = await getBlogs();
  const formattedBlogs = formatBlogs(blogs);
  const categoriesWithCounts = getCategoriesWithCounts(formattedBlogs);

  return (
    <ul className="flex list-none flex-wrap ps-0">
      {Object.entries(categoriesWithCounts).map(([category, count], i) => (
        <li
          key={`category-cloud-${slugify(category)}`}
          className="m-0 mb-1 mr-1 p-0"
        >
          <Link href={`/blog/category/${slugify(category)}/`}>
            <CategoryBadge className="text-xs sm:text-sm">
              <span>{category}</span>&nbsp;
              <span>{siteConfig.showCategoryCount && `(${count})`}</span>
            </CategoryBadge>
          </Link>
        </li>
      ))}
    </ul>
  );
}
