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

  if (duplicateCodes.length > 0) createDuplicateError(duplicateCodes);
}

/**
 * Checks the VGWort code for a specific blog post.
 * Ensures that the VGWort code is present and properly formatted.
 *
 * @param {BlogPost} post - The blog post to check.
 * @throws Will throw an error if the VGWort code is missing or improperly formatted.
 */
export function checkVGWortCode(post: BlogPost): void {
  checkForMissingVGWortCode(post);
  checkVGWortCodeFormat(post);
}

/**
 * Creates an error message for duplicate VGWort codes.
 *
 * @param {BlogPost[][]} duplicates - A list of lists of blog posts that have duplicate VGWort codes.
 * @returns {never} Throws an error with a message indicating which VGWort codes are duplicates and where.
 * @throws Will always throw an error with the duplicate VGWort codes information.
 */
function createDuplicateError(duplicates: BlogPost[][]): never {
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

  throw new Error(errorMessage);
}

/**
 * Checks if a blog post has a VGWort code.
 * Throws an error if the VGWort code is missing.
 *
 * @param {BlogPost} post - The blog post to check.
 * @throws Will throw an error if the VGWort code is missing.
 */
function checkForMissingVGWortCode(post: BlogPost): void {
  const { frontmatter, slug } = post;
  const { vgWortCode } = frontmatter;

  if (!vgWortCode)
    throw new Error(`
    Missing VGWortCode!\n
    On: ${slug}
    In: ${path.dirname(post.relativeFilePath).slice(1)}
    `);
}

/**
 * Checks if a VGWort code is properly formatted.
 * Throws an error if the VGWort code is too short, too long, or contains invalid characters.
 *
 * @param {BlogPost} post - The blog post to check.
 * @throws Will throw an error if the VGWort code is improperly formatted.
 */
function checkVGWortCodeFormat(post: BlogPost): void {
  const { frontmatter, slug } = post;
  const { vgWortCode } = frontmatter;

  if (vgWortCode.length < 32) {
    throw new Error(`
    Invalid VGWortCode! (too short)
    expected: 32, instead got: ${vgWortCode.length}\n
    On: ${slug}
    In: ${path.dirname(post.relativeFilePath).slice(1)}
    `);
  }

  if (vgWortCode.length > 32) {
    throw new Error(`
    Invalid VGWortCode! (too long)
    expected: 32, instead got: ${vgWortCode.length}\n
    On: ${slug}
    In: ${path.dirname(post.relativeFilePath).slice(1)}
    `);
  }

  const invalidChar = vgWortCode.match(/[^a-z0-9]/g);

  if (invalidChar) {
    const position = vgWortCode.indexOf(invalidChar[0]) + 1;

    throw new Error(`
    Invalid VGWortCode! (invalid char)\n
    VGWortCode can only contain integers and lower case letters.\n
    Invalid char: '${invalidChar}'
    Position: ${position}
    On: ${slug}
    In: ${path.dirname(post.relativeFilePath).slice(1)}
    `);
  }
}
