import { dropRight } from "./drop-right";

describe("Drop Right", () => {
  it('should be able to return an array with N elements dropped from the right', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = dropRight(originalArr, 2);
  
    expect(result).toEqual([1, 2, 3]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })

  it('should be able to return an empty array when dropping more elements than the original array has', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = dropRight(originalArr, 8);
  
    expect(result).toEqual([]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })
})