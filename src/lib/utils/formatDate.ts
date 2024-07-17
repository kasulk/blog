/**
 * Formats a date to a specified locale.
 *
 * @param {Date} date - The date to format.
 * @param {string} [locale="de-DE"] - The locale string for formatting. Defaults to "de-DE".
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date, locale = "de-DE"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric", // removes leading zeros
  }).format(date);
}

/**
 * Extracts the month and year from a date
 *
 * @param {Date | null} date - The date to extract the month and year from. If null, returns null.
 * @returns {string | null} The formatted month and year string, or null if the date is null.
 */
export function getMonthAndYearFromDate(date: Date | null): string | null {
  return date ? formatDate(date).split(" ").slice(1).join(" ") : null;
}
