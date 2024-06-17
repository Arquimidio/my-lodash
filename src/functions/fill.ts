export function fill(
  arr: any[],
  value: any,
  fillStart: number = 0,
  fillEnd: number = arr.length
): any[] {
  if(fillStart < 0 || fillEnd < 0) return arr;

  for(let i = fillStart; i < fillEnd;  i++) {
    arr[i] = value;
  }

  return arr;
}