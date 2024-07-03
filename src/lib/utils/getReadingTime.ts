export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const AVERAGE_WORDS_PER_MINUTE = 200;
  return Math.ceil(words / AVERAGE_WORDS_PER_MINUTE);
}
