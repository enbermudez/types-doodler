import charmap from '../../src/strings/charmap';

describe('String - Charmap', () => {
  it('Should throw an error if the "str" provided is not a string', () => {
    expect(() => charmap({ str: false })).toThrow('ValidationError: "str" must be a string');
  });

  it('Should throw an error if no "str" is provided', () => {
    expect(() => charmap({})).toThrow('ValidationError: "str" is required');
  });

  it('Should throw an error if the "insensitive" provided is not a boolean', () => {
    expect(() => charmap({ str: 'a', insensitive: 1 })).toThrow('ValidationError: "insensitive" must be a boolean');
  });

  it('Should return a charmap - lowercased', () => {
    expect(charmap({ str: 'abbccc' })).toMatchObject({ a: 1, b: 2, c: 3 });
  });

  it('Should return a charmap - insensitive', () => {
    expect(charmap({ str: 'aBbcCc', insensitive: true })).toMatchObject({ a: 1, b: 2, c: 3 });
  });

  it('Should return a charmap - combined symbols', () => {
    expect(charmap({ str: 'abbccc****11111' })).toMatchObject({ a: 1, b: 2, c: 3, '*': 4, 1: 5 });
  });
});
