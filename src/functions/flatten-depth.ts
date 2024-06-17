export function flattenDepth(
  arr: any[],
  depth: number = 1
): any[] {
  if (!arr?.length) return [];

  const rest = flattenDepth(arr.slice(1), depth);

  if (Array.isArray(arr[0])) {
    return [
      ...(depth > 1 ? flattenDepth(arr[0], depth - 1) : arr[0]),
      ...rest
    ]
  }

  return ([
    arr[0],
    ...rest
  ])
}