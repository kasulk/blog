/**
 * Determines the author of a blog post.
 *
 * @param {string | null} author - The author specified in the blog post. It can be a string or null.
 * @param {string} owner - The default owner of the blog post if the author is not specified or is "icke".
 * @returns {string} - Returns the actual author of the blog post. If the author is not specified or is "icke", it returns the owner.
 */
export function getBlogPostAuthor(
  author: string | null,
  owner: string,
): string {
  return !author || author === "icke" ? owner : author;
}
