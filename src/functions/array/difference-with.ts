export function differenceWith(
  arr: any[],
  valuesToExclude: any[],
  comparator: (a: any, b: any) => boolean
): any[] {
  return arr.filter((element) => (
    !valuesToExclude.some((value) => comparator(element, value))
  ))
}