export function lastIndexOf(
  arr: any[],
  value: any,
  fromIndex = arr.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}