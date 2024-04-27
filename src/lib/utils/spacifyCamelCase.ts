/**
 *
 * @param str CamelCase string, e.g. 'CamelCaseString'
 * @returns words separated by spaces, e.g. 'Camel Case String'
 */
export function spacifyCamelCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}
