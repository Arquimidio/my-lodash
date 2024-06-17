import { chunk } from "./chunk";

describe('Chunk', () => {
  it('should be able to chunk an array with an even number of elements and an even chunk size', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const chunkedArray = chunk(array, 2);

    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6]]);
  })  

  it('should be able to chunk an array with an odd number of elements and an odd chunk size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkedArray = chunk(array, 3);

    expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  })  

  it('should be able to chunk an array with an even number of elements and an odd chunk size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkedArray = chunk(array, 3);

    expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  })   

  it('should be able to chunk an array with an odd number of elements and an even chunk size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const chunkedArray = chunk(array, 2);

    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  })

  it('should be able to chunk an array with less elements than the chunk size', () => {
    const array = [1, 2, 3];
    const chunkedArray = chunk(array, 5);

    expect(chunkedArray).toEqual([[1, 2, 3]]);
  })
})  