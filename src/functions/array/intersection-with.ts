export function intersectionWith(
  a: any[],
  b: any[],
  comparator: (aVal: any, bVal: any) => boolean
): any[] {
  return a.filter(
    (aElement) => b.some((bElement) => comparator(aElement, bElement))
  );
}