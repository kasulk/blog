/**
 * turns string into camelCase,
 * e.g. 'This is some nice example!' => 'thisIsSomeNiceExample'
 *
 * @param str string
 * @returns string
 */
export function camelCasify(str: string): string {
  return str
    .split(/[^a-zA-Z0-9]+/) // splits at every non-alphanumeric char
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}
