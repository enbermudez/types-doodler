import palindrome from '../../src/strings/palindrome';

describe('String - Palindrome', () => {
  it('Should throw an error if the "str" provided is not a string', () => {
    expect(() => palindrome({ str: false })).toThrow('ValidationError: "str" must be a string');
  });

  it('Should throw an error if no "str" is provided', () => {
    expect(() => palindrome({})).toThrow('ValidationError: "str" is required');
  });

  it('Should return false if "str" is not a palindrome', () => {
    expect(palindrome({ str: 'Just a random string' })).toBeFalsy();
  });

  it('Should return true if "str" has length equals 1', () => {
    expect(palindrome({ str: 'a' })).toBeTruthy();
  });

  it('Should return true if "str" is a palindrome - lowercase', () => {
    expect(palindrome({ str: 'madam' })).toBeTruthy();
  });

  it('Should return true if "str" is a palindrome - random casing', () => {
    expect(palindrome({ str: 'MAdam' })).toBeTruthy();
  });
});
