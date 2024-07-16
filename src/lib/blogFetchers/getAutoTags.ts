import type { Frontmatter } from "@/../types";

/**
 * Generates an array of automatically derived tags from the frontmatter.
 *
 * @param {Frontmatter} frontmatter - The frontmatter of a blog post.
 * @returns {string[]} An array of automatically derived tags.
 */
export function getAutoTags(frontmatter: Frontmatter): string[] {
  return [...getAutoTagsFromCodeChallenge(frontmatter)];
}

/**
 * Generates an array of automatically derived tags based on code challenge data in the frontmatter.
 *
 * @param {Frontmatter} frontmatter - The frontmatter of a blog post.
 * @returns {[string, string] | []} An array containing the platform and language tags if code challenge data is present, otherwise an empty array.
 */
function getAutoTagsFromCodeChallenge(
  frontmatter: Frontmatter,
): [string, string] | [] {
  const { codeChallengeData } = frontmatter;

  if (codeChallengeData) {
    const { platform, language } = codeChallengeData;
    return [platform.toLowerCase(), language.toLowerCase()];
  }

  return [];
}
