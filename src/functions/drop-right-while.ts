export function dropRightWhile(
  arr: any[],
  checkCondition: (val: any) => boolean
): any[] {
  return arr.slice(0, Math.max(arr.findLastIndex(checkCondition), 0));
}