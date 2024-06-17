export function findLastIndex(
  arr: any[],
  checkCondition: (val: any) => boolean,
  startFrom: number = arr.length - 1
) {
  if(startFrom < 0) return -1;
  
  for(let i = startFrom; i >= 0; i--) {
    if (checkCondition(arr[i])) {
      return i;
    }
  }

  return -1;
}