/**
 * Calculates the estimated reading time for a given text.
 *
 * @param {string} text - The text for which to calculate the reading time.
 * @returns {number} The estimated reading time in minutes.
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const AVERAGE_WORDS_PER_MINUTE = 200;
  return Math.ceil(words / AVERAGE_WORDS_PER_MINUTE);
}
