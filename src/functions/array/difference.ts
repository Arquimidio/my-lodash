export function difference(
  arr: any[],
  valuesToExclude: any[]
): any[] {
  return arr.filter((val) => !valuesToExclude.includes(val));
}