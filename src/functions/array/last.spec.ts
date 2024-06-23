import { last } from "./last";

describe("Last", () => {
  it('should be able to return the last element of an array', () => {
    const arr = ['the', 'last', 'element', 'is', 42];

    expect(last(arr)).toEqual(42);
  })

  it('should return undefined if the given array is empty', () => {
    expect(last([])).toEqual(undefined);
  })
})