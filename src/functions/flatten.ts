export function flatten(
  arr: any[]
): any[] {
  if (!arr.length) return [];

  const rest = flatten(arr.slice(1));

  if (Array.isArray(arr[0])) {
    return [
      ...arr[0],
      ...rest
    ]
  }

  return [
    arr[0],
    ...rest
  ]
}