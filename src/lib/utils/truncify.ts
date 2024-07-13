/**
 * Truncates a text to a specified maximum length and appends '...'.
 * Ensures that the text is not cut off in the middle of a word.
 * If the last remaining characters are not letters (or `'"),
 * they are removed.
 *
 * @param text - Text to be truncated
 * @param maxLength - Maximum length of the truncated text (default 200)
 * @returns Truncated text with '...' appended if it was truncated
 */
export function truncify(text: string, maxLength = 200): string {
  if (text.length <= maxLength) return text;

  let truncated = text.slice(0, maxLength);

  // remove whole last word, if it's cut in the middle
  if (text[maxLength] !== " " && text[maxLength - 1] !== " ") {
    truncated = truncated.slice(0, truncated.lastIndexOf(" "));
  }

  // remove all trailing chars that are not letters (or `'")
  const regex = /[a-zA-ZäöüÄÖÜß`'"]/;
  while (truncated.length > 0 && !regex.test(truncated[truncated.length - 1])) {
    truncated = truncated.slice(0, -1);
  }

  return truncated + "...";
}
