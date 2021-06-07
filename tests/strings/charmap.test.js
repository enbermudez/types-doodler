import charmap from '../../src/strings/charmap';

describe('String - Charmap', () => {
  it('Should throw an error if the "string" provided is not a string', () => {
    expect(() => charmap({ string: false })).toThrow('ValidationError: "string" must be a string');
  });

  it('Should throw an error if no "string" is provided', () => {
    expect(() => charmap({})).toThrow('ValidationError: "string" is required');
  });

  it('Should throw an error if the "insensitive" provided is not a boolean', () => {
    expect(() => charmap({ string: 'a', insensitive: 1 })).toThrow('ValidationError: "insensitive" must be a boolean');
  });

  it('Should return a charmap - lowercased', () => {
    expect(charmap({ string: 'abbccc' })).toMatchObject({ a: 1, b: 2, c: 3 });
  });

  it('Should return a charmap - insensitive', () => {
    expect(charmap({ string: 'aBbcCc', insensitive: true })).toMatchObject({ a: 1, b: 2, c: 3 });
  });

  it('Should return a charmap - combined symbols', () => {
    expect(charmap({ string: 'abbccc****11111' })).toMatchObject({ a: 1, b: 2, c: 3, '*': 4, 1: 5 });
  });
});
