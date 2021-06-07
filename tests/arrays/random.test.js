import random from '../../src/arrays/random';

const testArr = [1, 2, 3, 4, 5];

describe('Array - Random', () => {
  it('Should throw an error if no "array" is provided', () => {
    expect(() => random({ array: false })).toThrow('ValidationError: "array" must be an array');
  });

  it('Should throw an error if "array" length is 0', () => {
    expect(() => random({ array: [] })).toThrow('ValidationError: "array" must contain at least 1 items');
  });

  it('Should throw an error if "quantity" is lower than 1', () => {
    expect(() => random({ array: [1], quantity: 0 })).toThrow('ValidationError: "quantity" must be greater than or equal to 1');
  });

  it('Should throw an error if "quantity" is greater than "array" length', () => {
    expect(() => random({ array: [1], quantity: 2 })).toThrow('ValidationError: "quantity" must be less than or equal to ref:array.length');
  });

  it('Should return the single element of a 1-length array', () => {
    expect(random({ array: [1] })).toEqual(1);
  });

  it('Should return any element of the original "array" - quantity equals 1', () => {
    expect(testArr).toContain(random({ array: testArr }));
  });

  it('Should return any element of the original "array" - quantity equals 2', () => {
    expect(random({ array: testArr, quantity: 2 }).every((i) => testArr.includes(i)));
  });
});
