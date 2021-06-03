import anagram from '../../src/strings/anagram';

describe('String - Anagram', () => {
  it('Should throw an error if the "string1" provided is not a string', () => {
    expect(() => anagram({ string1: false })).toThrow('ValidationError: "string1" must be a string');
  });

  it('Should throw an error if no "string1" is provided', () => {
    expect(() => anagram({})).toThrow('ValidationError: "string1" is required');
  });

  it('Should throw an error if the "string2" provided is not a string', () => {
    expect(() => anagram({ string1: 'gainly', string2: false })).toThrow('ValidationError: "string2" must be a string');
  });

  it('Should throw an error if no "string2" is provided', () => {
    expect(() => anagram({ string1: 'gainly' })).toThrow('ValidationError: "string2" is required');
  });

  it('Should return false if "string2" is not an anagram of "string1"', () => {
    expect(anagram({ string1: 'gainly', string2: 'pipo' })).toBeFalsy();
  });

  it('Should return false if "string2" is not an anagram of "string1" - sensitive', () => {
    expect(anagram({ string1: 'gaiNly', string2: 'laying' })).toBeFalsy();
  });

  it('Should return true if "string2" is an anagram of "string1" - lowercased', () => {
    expect(anagram({ string1: 'gainly', string2: 'laying' })).toBeTruthy();
  });

  it('Should return true if "string2" is an anagram of "string1" - insensitive', () => {
    expect(anagram({ string1: 'gaiNly', string2: 'laying', insensitive: true })).toBeTruthy();
  });
});
