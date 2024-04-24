/**
 * Gets up to 3 capitalized initials of any given full name
 *
 * @param fullName any number of names as a string
 * @returns A string with 1, 2 or 3 capitalized initials
 */
export function getInitials(fullName: string): string {
  const names = fullName.split(" ");
  const first = names[0];
  const second = names[1];
  const last = names.slice(-1)[0];

  const initials = [first[0]];

  if (names.length > 1) initials.push(second[0]);
  if (names.length > 2) initials.push(last[0]);

  return initials.join("").toUpperCase();
}
