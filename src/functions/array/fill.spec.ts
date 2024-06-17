import { fill } from "./fill";

describe("fill", () => {
  it('should be able to fill an entire array with the provided value', () => {
    const originalArr = [1, 2, 3, 4, 5, 6];
    const filledArr = fill(originalArr, 'g');

    expect(filledArr).toEqual(['g', 'g', 'g', 'g', 'g', 'g']);
    expect(originalArr).toEqual(filledArr);
  })

  it('should be able to partially fill an array with the provided value', () => {
    const originalArr = [1, 2, 3, 4, 5, 6];
    const filledArr = fill(originalArr, 'g', 2, 5);

    expect(filledArr).toEqual([1, 2, 'g', 'g', 'g', 6]);
  })

  it('should be able to partially fill an array from an index until the end with the provided value', () => {
    const originalArr = [1, 2, 3, 4, 5, 6];
    const filledArr = fill(originalArr, 'g', 3);

    expect(filledArr).toEqual([1, 2, 3, 'g', 'g', 'g']);
  })

  it('should not modify the array if the last index is smaller than the first', () => {
    const originalArr = [1, 2, 3, 4, 5, 6];
    const filledArr = fill(originalArr, 'g', 3, 1);

    expect(filledArr).toEqual([1, 2, 3, 4, 5, 6]);
  })

  it('should not modify the array if the first index is invalid', () => {
    const originalArr = [1, 2, 3, 4, 5, 6];
    const filledArr = fill(originalArr, 'g', -1, 5);

    expect(filledArr).toEqual([1, 2, 3, 4, 5, 6]);
  })
})