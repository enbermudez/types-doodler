import weirdCase from '../../src/strings/weird-case';

describe('String - Weird Case', () => {
  it('Should throw an error if the "str" provided is not a string', () => {
    expect(() => weirdCase({ str: false })).toThrow('ValidationError: "str" must be a string');
  });

  it('Should theow an error if no "str" is provided', () => {
    expect(() => weirdCase({})).toThrow('ValidationError: "str" is required');
  });

  it('Should return a weird-cased string - no "separator" provided', () => {
    expect(weirdCase({ str: 'This is so weird' })).toEqual('ThIs Is So WeIrD');
  });

  it('Should return a weird-cased string - "separator" provided', () => {
    expect(weirdCase({ str: 'This-is-so-weird', separator: '-' })).toEqual('ThIs-Is-So-WeIrD');
  });

  it('Should throw an error if the provided "separator" is not a string', () => {
    expect(() => weirdCase({ str: 'This-is-so-weird', separator: false })).toThrow('ValidationError: "separator" must be a string');
  });
});
