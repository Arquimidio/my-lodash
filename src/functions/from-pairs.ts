export function fromPairs(
  arr: Array<[string, unknown]>
): Record<string, any> {
  return arr.reduce((acc: Record<any, any>, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {})
}
