export function intersectionBy(
  a: any[],
  b: any[],
  modify: (val: any) => unknown
): any[] {
  return a.reduce((acc: any[], cur) => {
    if (b.some((elt) => modify(elt) === modify(cur))) {
      acc.push(cur);
    }

    return acc;
  }, [])
}