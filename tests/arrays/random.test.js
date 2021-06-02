import random from '../../src/arrays/random';

const testArr = [1, 2, 3, 4, 5];

describe('Array - Random', () => {
  it('Should throw an error if no arr is provided', () => {
    expect(() => random({ arr: false })).toThrow('ValidationError: "arr" must be an array');
  });

  it('Should throw an error if arr length is 0', () => {
    expect(() => random({ arr: [] })).toThrow('ValidationError: "arr" must contain at least 1 items');
  });

  it('Should throw an error if qty is lower than 1', () => {
    expect(() => random({ arr: [1], qty: 0 })).toThrow('ValidationError: "qty" must be greater than or equal to 1');
  });

  it('Should throw an error if qty is greater than arr length', () => {
    expect(() => random({ arr: [1], qty: 2 })).toThrow('ValidationError: "qty" must be less than or equal to ref:arr.length');
  });

  it('Should return the single element of a 1-length array', () => {
    expect(random({ arr: [1] })).toEqual(1);
  });

  it('Should return any element of the original array - qty equals 1', () => {
    expect(testArr).toContain(random({ arr: testArr }));
  });

  it('Should return any element of the original array - qty equals 2', () => {
    expect(random({ arr: testArr, qty: 2 }).every((i) => testArr.includes(i)));
  });
});
