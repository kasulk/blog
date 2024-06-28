import { Frontmatter } from "@/../types";

/**
 * Generates a blog post description based on the provided frontmatter data.
 *
 * @param {Object} frontmatter - The frontmatter data of the blog post.
 * @param {string} frontmatter.description - The main description of the blog post.
 * @param {Object} [frontmatter.codeChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codeChallengeData.title - The title of the coding challenge.
 * @param {string} frontmatter.codeChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {string} frontmatter.codeChallengeData.level - The difficulty level of the coding challenge.
 * @returns {string} - The generated blog post description. If the main description is missing and the post is a coding challenge,
 *                     it generates a description based on the coding challenge data.
 */
export function createBlogPostDescription(frontmatter: Frontmatter): string {
  let { description, codeChallengeData } = frontmatter;

  if (!description) {
    if (codeChallengeData) {
      const { title, platform, level } = codeChallengeData;
      description = `Schritt für Schritt Lösung für die ${platform} Coding-Challenge "${title}" (${level})`;
    }
  }

  return description || "";
}
