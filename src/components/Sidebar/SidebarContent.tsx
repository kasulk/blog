import { getBlogs } from "@/lib/blogFetchers";
import { BlogCategoryCloud } from ".";
import { BlogRelatedPosts } from ".";

export async function SidebarContent() {
  const blogs = await getBlogs();

  return (
    <>
      {/* <BlogCategoryCloud blogs={blogs} /> */}
      {/* <BlogRelatedPosts /> */}
    </>
  );
}
