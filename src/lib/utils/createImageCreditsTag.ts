type Credits = { [key: string]: string };

export function createImageCreditsTag(credits: Credits): string {
  return (
    "Foto: " +
    Object.values(credits)
      .filter((val) => val)
      .join(" | ")
  );
}
