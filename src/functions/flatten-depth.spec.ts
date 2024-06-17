import { flattenDepth } from "./flatten-depth";

describe("Flatten Depth", () => {
  it('should be able to flatten nested arrays based on the defined depth', () => {
    const arr = [1, 2, [3, 4, [5]], [6], 7];

    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  })

  it('should be able to flatten nested arrays only until it reaches the defined depth', () => {
    const arr = [1, 2, [3, 4, [5]], [6], [[[7]]], [8, [[[9]]]]];

    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, [7], 8, [[9]]]);
  })
})