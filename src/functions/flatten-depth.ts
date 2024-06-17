export function flattenDepth(
  arr: any[],
  depth: number = 1
): any[] {
  if (!arr?.length) return [];

  return [
    ...(Array.isArray(arr[0]) ? depth > 1 ? flattenDepth(arr[0], depth - 1) : arr[0] : [arr[0]]),
    ...flattenDepth(arr.slice(1), depth)
  ]
}