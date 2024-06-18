import { indexOf } from "./index-of";

describe("Index Of", () => {
  it('should be able to find index of an element within an array', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(indexOf(arr, 'g')).toEqual(4);
  })

  it('should return -1 if the element could not be found', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(indexOf(arr, 11)).toEqual(-1);
  })
  
  it('should be able to find index of an element within an array starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(indexOf(arr, 'g', 2)).toEqual(4);
  })

  it('should return -1 if the element could not be found starting from N', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(indexOf(arr, 'g', 5)).toEqual(-1);
  })

  it('should return -1 if the defined starting position is less than 0', () => {
    const arr = [1, 3, 5, 10, 'g', 0, 2];

    expect(indexOf(arr, 'g', -5)).toEqual(-1);
  })
})