import { pullAll } from "./pull-all";

describe("Pull All", () => {
  it('should be able to remove the specified elements from an array', () => {
    const arr = [2, 5, 8, 39, 1, 3, 2, 25, 5, 1];

    expect(pullAll(arr, [2, 5])).toEqual([8, 39, 1, 3, 25, 1]);
  })

  it('should not modify the array if no specified elements are found', () => {
    const arr = [1, 2, 3];

    expect(pullAll(arr, [4])).toEqual([1, 2, 3]);
  })

  it('should modify the original array', () => {
    const arr = [1, 2, 3];

    pullAll(arr, [2]);

    expect(arr).not.toEqual([1, 2, 3]);
  })
})