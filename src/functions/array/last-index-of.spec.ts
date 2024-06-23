import { lastIndexOf } from "./last-index-of";

describe("Last Index Of", () => {
  it('should be able to return the last index of an element', () => {
    const arr = [1, 2, 3, 4, 5, 2, 7, 9];

    expect(lastIndexOf(arr, 2)).toEqual(5);
  })

  it('should be able to return the last index of an element starting from a specific position', () => {
    const arr = [1, 2, 3, 4, 5, 2, 7, 9];

    expect(lastIndexOf(arr, 2, 4)).toEqual(1);
  })

  it('should return -1 if the element could not be found', () => {
    const arr = [1, 2, 3, 4, 5, 2, 7, 9];

    expect(lastIndexOf(arr, 12)).toEqual(-1);
  })
})