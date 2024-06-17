import { difference } from "./difference";

describe("Difference", () => {
  it('should be able to filter values from the first array based on the second array', () => {
    const originalArr = [1, 2, 3, 4, 5, 6, 5, 3, 1, 7, 2];
    const valuesToExclude = [3, 5];

    const result = difference(originalArr, valuesToExclude);

    expect(result).toEqual([1, 2, 4, 6, 1, 7, 2]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5, 6, 5, 3, 1, 7, 2]);
    expect(valuesToExclude).toEqual([3, 5]);
  })
})