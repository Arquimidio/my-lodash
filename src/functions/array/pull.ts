export function pull<T>(
  arr: T[],
  ...args: T[]
): T[] {
  for (let i = 0; i < arr.length; i) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }

  return arr;
}