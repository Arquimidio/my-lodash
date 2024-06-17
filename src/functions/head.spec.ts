import { head } from "./head";

describe("Head", () => {
  it('should be able to get the first element of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(head(arr)).toEqual(1);
  })

  it('should return undefined if the array is empty', () => {
    expect(head([])).toEqual(undefined);
  })
})