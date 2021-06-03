import shuffle from '../../src/arrays/shuffle';
import equals from '../../src/arrays/equals';

const testArr = [1, 2, 3, 4, 5];

describe('Array - Shuffle', () => {
  it('Should throw an error if no "array" is provided', () => {
    expect(() => shuffle({ array: false })).toThrow('ValidationError: "array" must be an array');
  });

  it('Should throw an error if "array" length is 0', () => {
    expect(() => shuffle({ array: [] })).toThrow('ValidationError: "array" must contain at least 1 items');
  });

  it('Should return an array with every element of the provided "array" in a random order', () => {
    const shuffled = shuffle({ array: testArr });

    expect(equals({ array1: shuffled, array2: testArr })).toBeFalsy();
    expect(equals({ array1: shuffled, array2: testArr, ordered: true })).toBeTruthy();
  });
});
