import { findIndex } from "./find-index";

describe("Find Index", () => {
  it('should be able to find index of an element within an array', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findIndex(arr, (val) => typeof val == 'string')).toEqual(4);
  })

  it('should return -1 if the element could not be found', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findIndex(arr, (val) => typeof val == 'object')).toEqual(-1);
  })
  
  it('should be able to find index of an element within an array starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findIndex(arr, (val) => typeof val == 'string', 2)).toEqual(4);
  })

  it('should be return -1 if the element could not be found starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findIndex(arr, (val) => typeof val == 'string', 5)).toEqual(-1);
  })

  it('should be able to find the index even if the defined starting position is less than 0', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(findIndex(arr, (val) => typeof val == 'string', -5)).toEqual(4);
  })
})