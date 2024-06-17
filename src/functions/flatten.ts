export function flatten(
  arr: any[]
): any[] {
  if (!arr.length) return [];

  return [
    ...(Array.isArray(arr[0]) ? arr[0] : [arr[0]]),
    ...flatten(arr.slice(1))
  ]
}