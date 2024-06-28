type Credits = { [key: string]: string };

/**
 * Generates an image credits tag from the given credits.
 *
 * @param {Credits} credits - An object containing the credits for the image.
 * @returns {string} - A string that returns the image credits in the format "Image: Creator | Source | ...".
 */
export function createImageCreditsTag(credits: Credits): string {
  return (
    "Bildquelle: " +
    Object.values(credits)
      .filter((val) => val)
      .join(" | ")
  );
}
