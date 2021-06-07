import prime from '../../src/numbers/prime';

describe('Number -Prime', () => {
  it('Should throw an error if the "number" provided is not a number', () => {
    expect(() => prime({ number: false })).toThrow('ValidationError: "number" must be a number');
  });

  it('Should throw an error if no "number" is provided', () => {
    expect(() => prime({})).toThrow('ValidationError: "number" is required');
  });

  it('Should return false if a non prime "number" is provided', () => {
    expect(prime({ number: 4 })).toBeFalsy();
  });

  it('Should return false if 0 is provided', () => {
    expect(prime({ number: 0 })).toBeFalsy();
  });

  it('Should return true if a prime "number" is provided', () => {
    expect(prime({ number: 5 })).toBeTruthy();
  });
});
