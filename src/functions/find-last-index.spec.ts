import { findLastIndex } from "./find-last-index";

describe("Find Last Index", () => {
  it('should be able to find index of an element within an array', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findLastIndex(arr, (val) => typeof val == 'string')).toEqual(4);
  })

  it('should return -1 if the element could not be found', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findLastIndex(arr, (val) => typeof val == 'object')).toEqual(-1);
  })
  
  it('should be able to find index of an element within an array starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findLastIndex(arr, (val) => typeof val == 'string', 5)).toEqual(4);
  })

  it('should return -1 if the element could not be found starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findLastIndex(arr, (val) => typeof val == 'string', 3)).toEqual(-1);
  })

  it('should return -1 if the passed starting index is invalid', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findLastIndex(arr, (val) => typeof val == 'string', -5)).toEqual(-1);
  })
})