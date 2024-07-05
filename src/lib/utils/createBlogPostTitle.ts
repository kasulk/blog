import type { Frontmatter } from "@/../types";
import type { StrippedApiData } from "../apiFetchers/types";
import { capitalize } from "./capitalize";
import { CodeChallenge, Platform, codeChallenge } from "@/config/links";

/**
 * Generates a blog post title based on the provided frontmatter and API data.
 * Throws an error if neither a main title nor valid coding challenge data is provided.
 *
 * @param {Frontmatter} frontmatter - The frontmatter data of the blog post.
 * @param {string} [frontmatter.title] - The main title of the blog post.
 * @param {CodeChallengeData} [frontmatter.codeChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codeChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {StrippedApiData} [apiData] - Additional stripped API data related to the blog post.
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
    if (codeChallengeData) {
      const { platform } = codeChallengeData;

      if (!isValidPlatform(platform, codeChallenge)) {
        throwInvalidPlatformError(platform);
      }

      // get title from API data
      if (platform && apiData && apiData.name) {
        title = `${capitalize(platform)} Lösung | ${apiData.name}`;
      }
    }

    if (!title) throwMissingTitleError(frontmatter);
  }

  return title;
}

/**
 * Validates if the provided platform is a valid code challenge platform.
 *
 * @param {string} platform - The platform to validate.
 * @param {CodeChallenge} codeChallenge - The available code challenge platforms.
 * @returns {boolean} - Returns true if the platform is valid, otherwise false.
 */
function isValidPlatform(
  platform: string,
  codeChallenge: CodeChallenge,
): platform is Platform {
  return platform in codeChallenge;
}

/**
 * Throws an error indicating the provided platform is invalid.
 *
 * @param {Platform} platform - The invalid platform.
 * @throws {Error} - Throws an error with a detailed message about the invalid platform.
 */
function throwInvalidPlatformError(platform: Platform): never {
  throw new Error(`'${platform}' is not a valid platform!\n
  Please provide a valid platform.
  Valid Platforms are:
  ${JSON.stringify(Object.keys(codeChallenge).join(",\n"), null, 2)}\n
  (or add one at /config/links/codeChallenge)\n
  export const codeChallenge = ${JSON.stringify(codeChallenge, null, 2)}
  `);
}

/**
 * Throws an error indicating that the blog post title is missing.
 *
 * @param {Frontmatter} frontmatter - The frontmatter data of the blog post.
 * @throws {Error} - Throws an error with a detailed message about the missing title.
 */
function throwMissingTitleError(frontmatter: Frontmatter): never {
  throw new Error(`Please provide a blog post title!\n
  ${JSON.stringify(frontmatter, null, 2)}
  `);
}
