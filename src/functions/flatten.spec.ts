import { flatten } from "./flatten";

describe("Flatten", () => {
  it('should be able to flatten an array with 1 level deep', () => {
    const arr = [1, 2, [3, 4, [5]], [6], 7];

    expect(flatten(arr)).toEqual([1, 2, 3, 4, [5], 6, 7]);
  })
})