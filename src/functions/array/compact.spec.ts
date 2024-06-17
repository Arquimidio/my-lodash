import { compact } from "./compact"

describe("Compact", () => {
  it("should be able to filter falsy values from an array", () => {
    const compactArray = compact([1, false, 3, '', 5, null, 7, NaN, 9, undefined, 11]);

    expect(compactArray).toEqual([1, 3, 5, 7, 9, 11]);
  })
})