export function intersection(
  a: any[],
  b: any[]
): any[] {
  return a.reduce((acc, cur) => {
    if (b.includes(cur)) {
      acc.push(cur);
    }

    return acc;
  }, [])
}