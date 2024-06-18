import { intersectionBy } from "./intersection-by";

describe("Intersection By", () => {
  it('should be able to get the intersection between 2 arrays', () => {
    const a = [1.2, 3.4, 5.9, 9.2, 15.4];
    const b = [2.3, 5.8, 7.4, 15.3];

    expect(intersectionBy(a, b, Math.floor)).toEqual([5.9, 15.4]);
  })

  it('should return an empty array if there is no intersection', () => {
    const a = [1.2, 3.4, 5.9, 9.2, 15.4];
    const b = [2.3, 6.8, 7.4, 16.3, 'g'];

    expect(intersectionBy(a, b, Math.floor)).toEqual([]);
  })
})