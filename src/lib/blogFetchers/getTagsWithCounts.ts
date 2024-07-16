import type { BlogPost } from "@/../types";
import { sortObjectKeys } from "../utils";

/**
 * Calculates the counts of each tag from an array of blog posts.
 *
 * This function iterates over all blog posts, extracts the tags from their frontmatter,
 * and counts the occurrences of each tag. The resulting object contains tags as keys and their counts as values.
 * The object keys are sorted before being returned.
 *
 * @param {BlogPost[]} blogs - An array of blog posts to extract tags from.
 * @returns {Object<string, number>} An object where the keys are tags and the values are their respective counts.
 */
export function getTagsWithCounts(blogs: BlogPost[]): {
  [key: string]: number;
} {
  const tagsWithCounts: { [key: string]: number } = {};

  blogs.forEach(({ frontmatter }) => {
    const allTags = frontmatter.tags || [];

    allTags.forEach((tag) => {
      if (tagsWithCounts[tag]) tagsWithCounts[tag]++;
      else tagsWithCounts[tag] = 1;
    });
  });

  return sortObjectKeys(tagsWithCounts);
}
