import type { Frontmatter } from "@/../types";
import type { StrippedApiData } from "../apiFetchers/types";
import { capitalize } from "./capitalize";

/**
 * Generates a blog post title based on the provided frontmatter and API data.
 * Throws an error if neither a main title nor valid coding challenge data is provided.
 *
 * @param {Object} frontmatter - The frontmatter data of the blog post.
 * @param {string} [frontmatter.title] - The main title of the blog post.
 * @param {Object} [frontmatter.codeChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codeChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {Object} apiData - Additional stripped API data related to the blog post.
 * @param {string} apiData.name - The name from the API data.
 * @throws {Error} - Throws an error if the title and coding challenge data are both missing or incomplete.
 * @returns {string} - The generated blog post title. If the main title is missing and the post is a coding challenge,
 *                     it generates a title based on the coding challenge data and API data.
 */
export function createBlogPostTitle(
  frontmatter: Frontmatter,
  apiData?: StrippedApiData | null,
): string {
  const { codeChallengeData } = frontmatter;
  let { title } = frontmatter;

  if (!title) {
    if (codeChallengeData && apiData) {
      const { platform } = codeChallengeData;

      if (!platform || !apiData.name) {
        throw new Error(
          `Please provide a blog post title!\n\n ${JSON.stringify(frontmatter, null, 2)}`,
        );
      }

      title = `${capitalize(platform)} Lösung | ${apiData.name}`;
    }
  }

  return title;
}
