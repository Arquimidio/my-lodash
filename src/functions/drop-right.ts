export function dropRight(
  arr: any[],
  numOfElementsToDrop: number,
): any[] {
  return arr.slice(0, Math.max(arr.length - numOfElementsToDrop, 0));
}