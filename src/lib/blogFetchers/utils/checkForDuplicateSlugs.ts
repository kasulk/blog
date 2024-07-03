import type { BlogPost } from "@/../types";
import path from "path";

/**
 * Checks for duplicate slugs in a list of blog posts.
 * Throws an error if any duplicates are found.
 *
 * @param {BlogPost[]} posts - The list of blog posts to check.
 * @throws Will throw an error if duplicate slugs are found.
 */
export function checkForDuplicateSlugs(posts: BlogPost[]): void {
  const slugMap: { [slug: string]: BlogPost[] } = {};

  posts.forEach((post) => {
    if (!slugMap[post.slug]) slugMap[post.slug] = [];
    slugMap[post.slug].push(post);
  });

  const duplicateSlugs = Object.values(slugMap).filter(
    (posts) => posts.length > 1,
  );

  if (duplicateSlugs.length > 0) {
    throw new Error(createErrorMessage(duplicateSlugs));
  }
}

/**
 * Creates an error message for duplicate slugs.
 *
 * @param {BlogPost[][]} duplicates - A list of lists of blog posts that have duplicate slugs.
 * @returns {string} The error message indicating which slugs are duplicated and where.
 */
function createErrorMessage(duplicates: BlogPost[][]): string {
  let errorMessage = "Uh-oh... Duplicate slugs found!\n";

  duplicates.forEach((posts) => {
    errorMessage += "\n" + `${posts.length}x ${posts[0].slug}:` + "\n";
    errorMessage +=
      posts
        .map((post, i) => `${i + 1}. ${path.dirname(post.relativeFilePath)}`)
        .join("\n") + "\n";
  });
  errorMessage += "\nTo fix this, please rename the files above";

  return errorMessage;
}
