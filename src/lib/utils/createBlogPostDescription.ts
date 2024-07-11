import type { Frontmatter } from "@/../types";
import type { StrippedApiData } from "../apiFetchers/types";
import { capitalize } from "./capitalize";

/**
 * Generates a blog post description based on the provided frontmatter data.
 * Throws an error if neither a main description nor valid coding challenge data is provided.
 *
 * @param {Object} frontmatter - The frontmatter data of the blog post.
 * @param {string} [frontmatter.description] - The main description of the blog post.
 * @param {Object} [frontmatter.codeChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codeChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {Object} [frontmatter.apiData] - Additional API data related to the blog post.
 * @param {string} frontmatter.apiData.name - The name from the API data.
 * @param {string} frontmatter.apiData.level - The level from the API data.
 * @throws {Error} - Throws an error if the description and coding challenge data are both missing or incomplete.
 * @returns {string} - The generated blog post description. If the main description is missing and the post is a coding challenge,
 *                     it generates a description based on the coding challenge data and API data.
 */
export function createBlogPostDescription(
  frontmatter: Frontmatter,
  apiData?: StrippedApiData | null,
): string {
  const { codeChallengeData } = frontmatter;
  let { description } = frontmatter;

  if (!description) {
    if (codeChallengeData && apiData) {
      const { platform, language } = codeChallengeData;
      const { name, level } = apiData;
      description = `Schritt für Schritt Lösung für die ${capitalize(platform)} Coding-Challenge "${name}" (${level}) in ${language}`;
    }
  }

  return description || "";
}
