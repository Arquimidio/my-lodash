import { fromPairs } from "./from-pairs";

describe("From Pairs", () => {
  it('should be able to transform an array of pair elements into an object', () => {
    const pairs: Array<[string, unknown]> = [['a', 3], ['b', 11], ['c', 42]];

    expect(fromPairs(pairs)).toEqual({
      a: 3,
      b: 11,
      c: 42
    })
  })
})