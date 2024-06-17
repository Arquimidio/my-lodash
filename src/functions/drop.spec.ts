import { drop } from "./drop";

describe("Drop", () => {
  it('should be able to return an array with N elements dropped', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = drop(originalArr, 2);
  
    expect(result).toEqual([3, 4, 5]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })

  it('should be able to return an empty array when dropping more elements than the original array has', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = drop(originalArr, 8);
  
    expect(result).toEqual([]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })
})