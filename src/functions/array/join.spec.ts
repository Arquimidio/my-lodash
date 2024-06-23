import { join } from "./join";

describe("Join", () => {
  it('should be able to join an array into a string', () => {
    const arr = ['some', 'random',  'data', 42];

    expect(join(arr, '-')).toEqual('some-random-data-42')
  })

  it('should return an empty string if the given array is empty', () => {
    expect(join([], '>')).toEqual('');
  })
})