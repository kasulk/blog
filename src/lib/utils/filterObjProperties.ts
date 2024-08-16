/**
 * Filters an object's properties, keeping only the specified keys.
 *
 * @param {Object} originalObj - The original object from which properties will be filtered.
 * @param {string[]} keysToKeep - An array of strings representing the keys to keep in the new object.
 * @returns {Object} A new object containing only the properties of the original object that match the specified keys.
 *
 * @example
 * const originalObj = { a: 1, b: 2, c: 3 };
 * const keysToKeep = ['a', 'c'];
 * const result = filterObjProperties(originalObj, keysToKeep);
 * console.log(result); // { a: 1, c: 3 }
 */
export function filterObjProperties(
  originalObj: { [key: string]: any },
  keysToKeep: string[],
): { [key: string]: any } {
  return Object.keys(originalObj)
    .filter((key) => keysToKeep.includes(key))
    .reduce(
      (obj, key) => {
        obj[key] = originalObj[key as keyof typeof originalObj];
        return obj;
      },
      {} as Partial<typeof originalObj>,
    );
}
