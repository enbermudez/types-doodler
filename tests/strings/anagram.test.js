import anagram from '../../src/strings/anagram';

describe('String - Anagram', () => {
  it('Should throw an error if the "str1" provided is not a string', () => {
    expect(() => anagram({ str1: false })).toThrow('ValidationError: "str1" must be a string');
  });

  it('Should throw an error if no "str1" is provided', () => {
    expect(() => anagram({})).toThrow('ValidationError: "str1" is required');
  });

  it('Should throw an error if the "str2" provided is not a string', () => {
    expect(() => anagram({ str1: 'gainly', str2: false })).toThrow('ValidationError: "str2" must be a string');
  });

  it('Should throw an error if no "str2" is provided', () => {
    expect(() => anagram({ str1: 'gainly' })).toThrow('ValidationError: "str2" is required');
  });

  it('Should return false if "str2" is not an anagram of "str1"', () => {
    expect(anagram({ str1: 'gainly', str2: 'pipo' })).toBeFalsy();
  });

  it('Should return false if "str2" is not an anagram of "str1" - sensitive', () => {
    expect(anagram({ str1: 'gaiNly', str2: 'laying' })).toBeFalsy();
  });

  it('Should return true if "str2" is an anagram of "str1" - lowercased', () => {
    expect(anagram({ str1: 'gainly', str2: 'laying' })).toBeTruthy();
  });

  it('Should return true if "str2" is an anagram of "str1" - insensitive', () => {
    expect(anagram({ str1: 'gaiNly', str2: 'laying', insensitive: true })).toBeTruthy();
  });
});
