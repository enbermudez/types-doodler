import equals from '../../src/arrays/equals';

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5];
const testArr3 = [2, 3, 1, 5, 4];
const testArr4 = [1, 2, 8, 4, 5];

describe('Array - Shuffle', () => {
  it('Should throw an error if no "array1" is provided', () => {
    expect(() => equals({})).toThrow('ValidationError: \"array1\" is required');
  });

  it('Should throw an error if "array1" is not an array', () => {
    expect(() => equals({ array1: false })).toThrow('ValidationError: "array1" must be an array');
  });

  it('Should throw an error if "array1" length is 0', () => {
    expect(() => equals({ array1: [] })).toThrow('ValidationError: "array1" must contain at least 1 items');
  });

  it('Should throw an error if no "array2" is provided', () => {
    expect(() => equals({ array1: [1] })).toThrow('ValidationError: "array2" is required');
  });

  it('Should throw an error if "array2" is not an array', () => {
    expect(() => equals({ array1: [1], array2: false })).toThrow('ValidationError: "array2" must be an array');
  });

  it('Should throw an error if "array2" length is 0', () => {
    expect(() => equals({ array1: [1], array2: [] })).toThrow('ValidationError: "array2" must contain at least 1 items');
  });

  it('Should return false if "array1" is not equals "array2"', () => {
    expect(equals({ array1: testArr1, array2: testArr4 })).toBeFalsy();
  });

  it('Should return false if "array1" is not equals "array2" - ordered', () => {
    expect(equals({ array1: testArr1, array2: testArr4, ordered: true })).toBeFalsy();
  });

  it('Should return true if "array1" is not equals "array2" - unordered', () => {
    expect(equals({ array1: testArr1, array2: testArr2 })).toBeTruthy();
  });

  it('Should return true if "array1" is not equals "array2" - ordered', () => {
    expect(equals({ array1: testArr1, array2: testArr3, ordered: true })).toBeTruthy();
  });
});
