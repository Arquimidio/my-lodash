import { flattenDeep } from "./flatten-deep";

describe("Flatten Deep", () => {
  it('should totally flatten an array with nested arrays', () => {
    const arr = [1, 2, [3, 4, [5]], [6], [[[7]]], [8, [[[9]]]]];

    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})