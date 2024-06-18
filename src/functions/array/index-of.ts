export function indexOf(
  arr: unknown[],
  elementToSearchFor: unknown,
  fromIndex: number = 0
) {
  if (fromIndex < 0) return - 1;
  
  for (let i = fromIndex; i <= arr.length; i++) {
    if (arr[i] === elementToSearchFor) {
      return i;
    }
  }

  return -1;
}