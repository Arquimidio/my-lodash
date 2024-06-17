export function flattenDeep(
  arr: any[],
): any[] {
  if(!arr?.length) return [];

  if (Array.isArray(arr[0])) {
    return [
      ...flattenDeep(arr[0]),
      ...flattenDeep(arr.slice(1))
    ]
  } else {
    return [
      arr[0],
      ...flattenDeep(arr.slice(1))
    ]
  }
}