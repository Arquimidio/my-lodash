export function join(
  arr: any[],
  separator = ','
): string {
  return arr.reduce((acc, item, i) => {
    return acc + item + (i === arr.length - 1 ? '' : separator) 
  }, '')
}