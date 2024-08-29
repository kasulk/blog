import type { BlogPost } from "@/../types";
import { createAndMergeAutoTags } from "../createAndMergeAutoTags";
import {
  createBlogPostDescription,
  createBlogPostTitle,
  getReadingTime,
} from "@/lib/utils";
import { fetchCodeChallengeAPIs } from "@/lib/apiFetchers";

/**
 * Asynchronously enhances the frontmatter of an array of blog posts by adding additional metadata.
 * This function fetches API data, generates automatic titles and descriptions if there are none,
 * creates and merges tags, and calculates reading time for each blog post.
 *
 * @async
 * @function addAdditionalDataToFrontmatters
 * @param {BlogPost[]} blogs - An array of blog post objects to be processed.
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of updated blog post objects,
 * including new or modified frontmatter properties such as title, description, (auto)tags, reading time, and API data.
 */
export async function addAdditionalDataToFrontmatters(
  blogs: BlogPost[],
): Promise<BlogPost[]> {
  const updatedBlogs = await Promise.all(
    blogs.map(async (blog) => {
      const { content, frontmatter } = blog;
      const { codeChallengeData } = frontmatter;

      // get API data
      const apiData = codeChallengeData
        ? await fetchCodeChallengeAPIs(codeChallengeData)
        : null;

      // create auto title and description if there is none
      const updatedTitle = createBlogPostTitle(frontmatter, apiData);
      const updatedDesc = createBlogPostDescription(frontmatter, apiData);

      const updatedTags = createAndMergeAutoTags(frontmatter);
      const readingTime = getReadingTime(content);

      return {
        ...blog,
        frontmatter: {
          ...frontmatter,
          title: updatedTitle,
          description: updatedDesc,
          tags: updatedTags,
          readingTime,
          apiData,
        },
      };
    }),
  );

  return updatedBlogs;
}
