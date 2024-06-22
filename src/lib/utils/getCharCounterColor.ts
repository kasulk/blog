export function getCharCounterColor(
  numChars: number,
  threshold: number,
): string {
  if (numChars >= threshold * 1.111) return "bg-success-600/50";
  if (numChars >= threshold) return "bg-warning-600/50";
  return "bg-danger-600/50";
}
