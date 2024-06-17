import { concat } from "./concat";

describe("Concat", () => {
  it('should be able to concatenate an array with new values and return it', () => {
    const originalArr = [1, 2, 3];
    const concatenatedArr = concat(originalArr, 4, 5);

    expect(concatenatedArr).toEqual([1, 2, 3, 4, 5]);
    expect(concatenatedArr).not.toBe(originalArr);
    expect(originalArr).toEqual([1, 2, 3]);
  })
})