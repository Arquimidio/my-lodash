import { initial } from "./initial";

describe("Initial", () => {
  it('should be able to get all elements but the last from an array', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(initial(arr)).toEqual([1, 2, 3, 4])
  })

  it('should return an empty array if the array has just 1 element', () => {
    const arr = [1];

    expect(initial(arr)).toEqual([])
  })

  it('should return an empty array if the array is empty', () => {
    const arr: any[] = [];

    expect(initial(arr)).toEqual([])
  })
})