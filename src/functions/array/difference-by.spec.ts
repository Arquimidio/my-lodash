import { differenceBy } from "./difference-by";

describe("Difference By", () => {
  it('should be able to filter values from the first array based on the second array using a modifier', () => {
    const originalArr = [1.5, 3.5, 4.2, 7.9];
    const diffArr = [2, 8];

    const result = differenceBy(originalArr, diffArr, Math.round);

    expect(result).toEqual([3.5, 4.2]);
    expect(originalArr).toEqual([1.5, 3.5, 4.2, 7.9]);
    expect(diffArr).toEqual([2, 8]);
  })

  it('should be able to filter values from the first array based on the second array using acess shorthand', () => {
    const originalArr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }, { a: 5 }];
    const diffArr = [{ a: 2 }];

    const result = differenceBy(originalArr, diffArr, 'a');

    expect(result).toEqual([{ a: 1 }, { a: 3 }, { a: 4 }, { a: 5 }]);
    expect(originalArr).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }, { a: 5 }]);
    expect(diffArr).toEqual([{ a: 2 }]);
  })
})