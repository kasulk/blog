import { Frontmatter } from "@/../types";

/**
 * Generates a blog post title based on the provided frontmatter data.
 * Throws an error if neither a main title nor valid coding challenge data is provided.
 *
 * @param {Object} frontmatter - The frontmatter data of the blog post.
 * @param {string} frontmatter.title - The main title of the blog post.
 * @param {Object} [frontmatter.codingChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codingChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {string} frontmatter.codingChallengeData.title - The title of the coding challenge.
 * @throws {Error} - Throws an error if the title and coding challenge data are both missing or incomplete.
 * @returns {string} - The generated blog post title. If the main title is missing and the post is a coding challenge,
 *                     it generates a title based on the coding challenge data.
 */
export function createBlogPostTitle(frontmatter: Frontmatter): string {
  let { title, codingChallengeData } = frontmatter;

  if (!title) {
    if (codingChallengeData) {
      const { platform, title: newTitle } = codingChallengeData;
      if (!platform || !newTitle) {
        throw new Error(
          `Please provide a blog post title!\n\n ${JSON.stringify(frontmatter, null, 2)}`,
        );
      }

      title = `${platform} Lösung | ${newTitle}`;
    }
  }

  return title;
}
