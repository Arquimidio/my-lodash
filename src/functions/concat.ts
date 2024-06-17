export function concat(
  arr: any[],
  ...values: any[]
): any[] {
  return [...arr, ...values];
}