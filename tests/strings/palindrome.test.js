import palindrome from '../../src/strings/palindrome';

describe('String - Palindrome', () => {
  it('Should throw an error if the "string" provided is not a string', () => {
    expect(() => palindrome({ string: false })).toThrow('ValidationError: "string" must be a string');
  });

  it('Should throw an error if no "string" is provided', () => {
    expect(() => palindrome({})).toThrow('ValidationError: "string" is required');
  });

  it('Should return false if "string" is not a palindrome', () => {
    expect(palindrome({ string: 'Just a random string' })).toBeFalsy();
  });

  it('Should return true if "string" has length equals 1', () => {
    expect(palindrome({ string: 'a' })).toBeTruthy();
  });

  it('Should return true if "string" is a palindrome - lowercase', () => {
    expect(palindrome({ string: 'madam' })).toBeTruthy();
  });

  it('Should return true if "string" is a palindrome - random casing', () => {
    expect(palindrome({ string: 'MAdam' })).toBeTruthy();
  });
});
