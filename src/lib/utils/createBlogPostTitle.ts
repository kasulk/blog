import { Frontmatter } from "@/../types";

/**
 * Generates a blog post title based on the provided frontmatter data.
 *
 * @param {Object} frontmatter - The frontmatter data of the blog post.
 * @param {string} frontmatter.title - The main title of the blog post.
 * @param {Object} [frontmatter.codingChallengeData] - The data specific to coding challenge posts.
 * @param {string} frontmatter.codingChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @param {string} frontmatter.codingChallengeData.title - The title of the coding challenge.
 * @returns {string} - The generated blog post title. If the main title is missing and the post is a coding challenge,
 *                     it generates a title based on the coding challenge data.
 */
export function createBlogPostTitle(frontmatter: Frontmatter): string {
  let { title, codingChallengeData } = frontmatter;

  if (!title) {
    if (codingChallengeData) {
      const { platform, title: newTitle } = codingChallengeData;
      title = `${platform} Lösung | ${newTitle}`;
    }
  }

  return title;
}
