import palindrome from '../../src/numbers/palindrome';

describe('Number - Palindrome', () => {
  it('Should throw an error if the "num" provided is not a number', () => {
    expect(() => palindrome({ num: false })).toThrow('ValidationError: "num" must be a number');
  });

  it('Should throw an error if no "num" is provided', () => {
    expect(() => palindrome({})).toThrow('ValidationError: "num" is required');
  });

  it('Should return false if a negative "num" is provided', () => {
    expect(palindrome({ num: -101 })).toBeFalsy();
  });

  it('Should return false if the provided "num" is positive and not a palindrome', () => {
    expect(palindrome({ num: 102 })).toBeFalsy();
  });

  it('Should return true if the provided "num" is positive and a palindrome', () => {
    expect(palindrome({ num: 101 })).toBeTruthy();
  });
});
