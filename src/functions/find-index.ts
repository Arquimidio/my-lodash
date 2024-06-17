export function findIndex(
  arr: any[],
  checkCondition: (val: any) => boolean,
  startFrom: number = 0
) {
  for (let i = Math.max(startFrom, 0); i < arr.length; i++) {
    if (checkCondition(arr[i])) {
      return i;
    }
  }

  return -1;
}