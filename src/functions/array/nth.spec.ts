import { nth } from "./nth";

describe("Nth", () => {
  it('should be able to return the element at the nth index', () => {
    const arr = [1, 2, 3, 9, 5, 3, 8];

    expect(nth(arr, 3)).toEqual(9);
  })

  it('should be able to return the element at the nth index with index being negative', () => {
    const arr = [1, 2, 3, 9, 5, 3, 8];

    expect(nth(arr, -2)).toEqual(3);
  })

  it('should return undefined if index is out of bounds', () => {
    const arr = [1, 2, 3, 9, 5, 3, 8];

    expect(nth(arr, 11)).toEqual(undefined);
  })
})