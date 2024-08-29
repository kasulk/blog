import type { Frontmatter } from "@/../types";

/**
 * Generates a list of unique tags by merging existing tags with automatically generated tags
 * based on the blog post's frontmatter. Throws an error if redundant tags are found.
 *
 * @function createAndMergeAutoTags
 * @param {Frontmatter} frontmatter - The frontmatter object containing metadata of a blog post,
 * including any existing tags and optional code challenge data.
 * @returns {string[]} An array of unique tags, combining both existing and automatically generated tags.
 * @throws Will throw an error if any automatically generated tag already exists in the original tags.
 */
export function createAndMergeAutoTags(frontmatter: Frontmatter): string[] {
  const { codeChallengeData } = frontmatter;

  const tags = frontmatter.tags || [];
  const autoTags = getAutoTags(frontmatter);

  tags.forEach((tag) => {
    if (autoTags.includes(tag)) {
      throwRedundantTagError(tag, codeChallengeData);
    }
  });

  return [...new Set([...tags, ...autoTags])];
}

/**
 * Generates an array of automatically derived tags from the frontmatter.
 *
 * @param {Frontmatter} frontmatter - The frontmatter of a blog post.
 * @returns {string[]} An array of automatically derived tags.
 */
function getAutoTags(frontmatter: Frontmatter): string[] {
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
