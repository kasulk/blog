import type { BlogPost, Frontmatter } from "@/../types";
import { getAutoTags } from "../getAutoTags";

/**
 * Adds automatically generated tags to the frontmatter of each blog post.
 *
 * This function iterates over each blog post, generates automatic tags based on the frontmatter,
 * and combines them with existing tags. If any redundant tags are found, it throws an error.
 * The resulting blog posts contain updated frontmatter with all tags.
 *
 * @param {BlogPost[]} blogs - An array of blog posts to process.
 * @returns {BlogPost[]} An array of blog posts with updated frontmatter including automatic tags.
 *
 * @throws {Error} Throws an error if a redundant tag is found in the auto-generated tags.
 */
export function addAutoTagsToFrontmatters(blogs: BlogPost[]): BlogPost[] {
  return blogs.map((blog) => {
    const { frontmatter } = blog;
    const { codeChallengeData } = frontmatter;
    const tags = frontmatter.tags || [];
    const autoTags = getAutoTags(frontmatter);

    tags.forEach((tag) => {
      if (autoTags.includes(tag)) {
        throwRedundantTagError(tag, codeChallengeData);
      }
    });

    const allTags = [...new Set([...tags, ...autoTags])];

    return { ...blog, frontmatter: { ...frontmatter, tags: allTags } };
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
