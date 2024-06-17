export function chunk(
  arr: any[],
  chunkSize: number = 1
): Array<any[]> {
  return arr.reduce((acc, cur) => {
    const accLastElement = acc[acc.length - 1];

    if (accLastElement?.length >= chunkSize || !accLastElement) {
      acc.push([cur]);
    } else {
      accLastElement.push(cur);
    }

    return acc;
  }, [])
}