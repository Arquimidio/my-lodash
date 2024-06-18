import { intersection } from "./intersection";

describe("Intersection", () => {
  it('should be able to get the intersection between 2 arrays', () => {
    const a = [1, 3, 5, 9, 15];
    const b = [2, 5, 7, 15];

    expect(intersection(a, b)).toEqual([5, 15]);
  })

  it('should return an empty array if there is no intersection', () => {
    const a = [1, 3, 5, 9, 15];
    const b = [2, 6, 7, 16];

    expect(intersection(a, b)).toEqual([]);
  })
})