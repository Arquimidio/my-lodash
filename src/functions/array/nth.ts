export function nth(
  arr: any[],
  index = 0,
): any {
  return arr[index >= 0 ? index : arr.length + index];
}