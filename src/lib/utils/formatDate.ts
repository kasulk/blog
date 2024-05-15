export function formatDate(date: Date, locale = "de-DE"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric", // removes leading zeros
  }).format(date);
}

// removes day from 'dd-mmmm-yyyy'
export function getMonthAndYearFromDate(date: Date, locale = "de-DE"): string {
  return formatDate(date, locale).split(" ").slice(1).join(" ");
}
