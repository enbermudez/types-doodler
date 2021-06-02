import prime from '../../src/numbers/prime';

describe('String - Weird Case', () => {
  it('Should throw an error if the "num" provided is not a number', () => {
    expect(() => prime({ num: false })).toThrow('ValidationError: "num" must be a number');
  });

  it('Should throw an error if no "num" is provided', () => {
    expect(() => prime({})).toThrow('ValidationError: "num" is required');
  });

  it('Should return false if a non prime "num" is provided', () => {
    expect(prime({ num: 4 })).toBeFalsy();
  });

  it('Should return false if 0 is provided', () => {
    expect(prime({ num: 0 })).toBeFalsy();
  });

  it('Should return true if a prime "num" is provided', () => {
    expect(prime({ num: 5 })).toBeTruthy();
  });
});
