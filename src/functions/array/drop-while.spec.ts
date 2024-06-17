import { dropWhile } from "./drop-while";

describe("Drop While", () => {
  it('should be able to drop elements from left to right in an array while a condition is not met', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = dropWhile(originalArr, (num) => num === 4);
  
    expect(result).toEqual([5]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })

  it('should be able to return an empty array if no elements meet the condition', () => {
    const originalArr = [1, 2, 3, 4, 5];
  
    const result = dropWhile(originalArr, (num) => num > 1000);
  
    expect(result).toEqual([]);
    expect(originalArr).toEqual([1, 2, 3, 4, 5]);
  })
})