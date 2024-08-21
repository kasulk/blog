import type { BlogPost, Frontmatter } from "@/../types";
import { getAutoTags } from "../getAutoTags";
import { getReadingTime } from "@/lib/utils";

/**
 * Adds automatically generated tags and estimated reading time to the frontmatter of each blog post.
 *
 * @param {BlogPost[]} blogs - An array of blog posts, where each post contains content and frontmatter.
 * @returns {BlogPost[]} - An array of blog posts with updated frontmatter, including additional tags and the reading time.
 *
 * @throws {Error} - Throws an error if a redundant tag is found, which is already present in both the manually added tags and the automatically generated tags.
 */
export function addAutoTagsAndReadingTimeToFrontmatters(
  blogs: BlogPost[],
): BlogPost[] {
  return blogs.map((blog) => {
    const { content, frontmatter } = blog;
    const { codeChallengeData } = frontmatter;
    const tags = frontmatter.tags || [];
    const autoTags = getAutoTags(frontmatter);

    tags.forEach((tag) => {
      if (autoTags.includes(tag)) {
        throwRedundantTagError(tag, codeChallengeData);
      }
    });

    const allTags = [...new Set([...tags, ...autoTags])];

    return {
      ...blog,
      frontmatter: {
        ...frontmatter,
        tags: allTags,
        readingTime: getReadingTime(content),
      },
    };
  });
}

/**
 * Throws an error indicating a redundant tag that is automatically generated from the code challenge data.
 *
 * @param {string} redundantTag - The redundant tag that was manually added.
 * @param {Frontmatter["codeChallengeData"]} codeChallengeData - The code challenge data from which the tag is automatically generated.
 * @throws {Error} Throws an error with a detailed message about the redundant tag.
 */
function throwRedundantTagError(
  redundantTag: string,
  codeChallengeData: Frontmatter["codeChallengeData"],
): never {
  throw new Error(`

  No need to tag the article with '${redundantTag}'
  because it's tagged automatically from it's codeChallengeData:\n
  codeChallengeData: ${JSON.stringify(codeChallengeData, null, 4)} `);
}
