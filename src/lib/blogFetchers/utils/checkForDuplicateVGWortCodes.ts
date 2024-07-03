import type { BlogPost } from "@/../types";
import path from "path";

/**
 * Checks for duplicate VGWort codes in a list of blog posts.
 * Throws an error if any duplicates are found.
 *
 * @param {BlogPost[]} posts - The list of blog posts to check.
 * @throws Will throw an error if duplicate VGWort codes are found.
 */
export function checkForDuplicateVGWortCodes(posts: BlogPost[]): void {
  const codesMap: { [vgWortCode: string]: BlogPost[] } = {};

  // remove posts without vgWort-Code at all
  posts = posts.filter(({ frontmatter }) => frontmatter.vgWortCode);

  posts.forEach((post) => {
    const { vgWortCode } = post.frontmatter;
    if (!codesMap[vgWortCode]) codesMap[vgWortCode] = [];
    codesMap[vgWortCode].push(post);
  });

  const duplicateCodes = Object.values(codesMap).filter(
    (posts) => posts.length > 1,
  );

  if (duplicateCodes.length > 0) {
    throw new Error(createErrorMessage(duplicateCodes));
  }
}

/**
 * Creates an error message for duplicate VGWort codes.
 *
 * @param {BlogPost[][]} duplicates - A list of lists of blog posts that have duplicate VGWort codes.
 * @returns {string} The error message indicating which VGWort codes are duplicated and where.
 */
function createErrorMessage(duplicates: BlogPost[][]): string {
  let errorMessage = "Uh-oh... Found duplicate VGWort-Codes!\n";

  duplicates.forEach((posts) => {
    errorMessage +=
      "\n" + `${posts.length}x '${posts[0].frontmatter.vgWortCode}':` + "\n";
    errorMessage +=
      posts
        .map(
          (post, i) =>
            `${(i + 1).toString().padStart(2, " ")}. ${post.slug}\n` +
            " ".repeat(4) +
            `(${path.dirname(post.relativeFilePath).slice(1)})`,
        )
        .join("\n") + "\n";
  });
  errorMessage += "\nTo fix this, please check the files above";

  return errorMessage;
}
