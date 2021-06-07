import palindrome from '../../src/numbers/palindrome';

describe('Number - Palindrome', () => {
  it('Should throw an error if the "number" provided is not a number', () => {
    expect(() => palindrome({ number: false })).toThrow('ValidationError: "number" must be a number');
  });

  it('Should throw an error if no "number" is provided', () => {
    expect(() => palindrome({})).toThrow('ValidationError: "number" is required');
  });

  it('Should return false if a negative "number" is provided', () => {
    expect(palindrome({ number: -101 })).toBeFalsy();
  });

  it('Should return false if the provided "number" is positive and not a palindrome', () => {
    expect(palindrome({ number: 102 })).toBeFalsy();
  });

  it('Should return true if the provided "number" is positive and a palindrome', () => {
    expect(palindrome({ number: 101 })).toBeTruthy();
  });
});
