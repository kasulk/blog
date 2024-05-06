export function sortObjectKeys(obj: { [key: string]: number }): {
  [key: string]: number;
} {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj: { [key: string]: number } = {};

  sortedKeys.forEach((key) => {
    sortedObj[key] = obj[key];
  });

  return sortedObj;
}
