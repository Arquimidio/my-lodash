import { intersectionWith } from "./intersection-with";

describe("Intersection With", () => {
  it('should be able to get the intersection of object arrays', () => {
    const primaryArr = [{ x: 4, y: 2 }, { x: 1, y: 5 }, { x: 3, y: 8 }];
    const secundaryArr = [{ x: 2.5, y: 5 }, { x: 8, y: 4 }, { x: 4, y: 9.5 }];

    expect(
      intersectionWith(primaryArr, secundaryArr, (a, b) => a.x === b.x || a.y === b.y)
    ).toEqual([{ x: 4, y: 2 }, { x: 1, y: 5 }])
  })
})