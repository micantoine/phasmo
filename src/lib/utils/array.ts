/**
 * Shuffle an array 
 * (Fisher-Yates algorithm)
 * @param array the array to shuffle 
 * @returns the new shuffle array;
 */

export const shuffle = <T = unknown>(array: T[]): T[] => {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

/**
 * Pick random element from an array
 * @param array the array to pick from
 * @returns the element
 */
export const pickRandom = <T= unknown>(array: T[]): T => {
  const index = Math.floor(Math.random()*array.length);
  return array[index];
}