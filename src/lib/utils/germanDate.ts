export function getGermanDate(dateStr: string) {
  const date = new Date(dateStr);

  const germanDate = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric", // removes leading zeros
  }).format(date);

  return germanDate;
}
