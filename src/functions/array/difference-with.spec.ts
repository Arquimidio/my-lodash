import { differenceWith } from "./difference-with";

describe("Difference With", () => {
  it('should be able to filter values from the first array based on the second array using a comparator', () => {
    const originalArr = [{ x: 1, y: 4 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 7 }, { x: 2, y: 1 }, { x: 5, y: 2 }];
    const diffArr = [{ x: 2, y: 1 }];

    const result = differenceWith(originalArr, diffArr, (a, b) => a.x === b.x && a.y === b.y);

    expect(result).toEqual([{ x: 1, y: 4 }, { x: 3, y: 2 }, { x: 4, y: 7 }, { x: 5, y: 2 }]);
    expect(originalArr).toEqual([{ x: 1, y: 4 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 7 }, { x: 2, y: 1 }, { x: 5, y: 2 }]);
    expect(diffArr).toEqual([{ x: 2, y: 1 }]);
  })
})