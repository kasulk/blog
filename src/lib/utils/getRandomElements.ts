/**
 * Gets numElements amount of random elements from an array
 * (if there are less elements in the array, the whole array gets randomized)
 *
 * @param inputArr
 * @param numElements
 * @returns numElements (or inputArr.length) amount of random elements from the input array
 */
export function getRandomElements<T>(inputArr: T[], numElements: number): T[] {
  const result: T[] = [];
  const arr = [...inputArr];
  const arrLen = arr.length;

  if (numElements >= arrLen) {
    // return whole shuffled array
    for (let i = arrLen - 1; i > 0; i--) {
      const j = Math.trunc(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  // select numElements-amount of random elements
  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.trunc(Math.random() * (arrLen - i));
    result.push(arr[randomIndex]);
    // remove the selected element by switching it with the last not-selected element
    [arr[randomIndex], arr[arrLen - i - 1]] = [
      arr[arrLen - i - 1],
      arr[randomIndex],
    ];
  }

  return result;
}
