import weirdCase from '../../src/strings/weird-case';

describe('Weird Case', () => {
  it('Should throw an error if no string is provided', () => {
    expect(() => weirdCase({ str: false })).toThrow('ValidationError: "str" must be a string');
  });

  it('Should return the same value if 0 length string is provided', () => {
    expect(() => weirdCase({})).toThrow('ValidationError: "str" is required');
  });

  it('Should return a weird-cased string - no separator provided', () => {
    expect(weirdCase({ str: 'This is so weird' })).toEqual('ThIs Is So WeIrD');
  });

  it('Should return a weird-cased string - separator provided', () => {
    expect(weirdCase({ str: 'This-is-so-weird', separator: '-' })).toEqual('ThIs-Is-So-WeIrD');
  });

  it('Should throw an error if the provided separator is not a string', () => {
    expect(() => weirdCase({ str: 'This-is-so-weird', separator: false })).toThrow('ValidationError: "separator" must be a string');
  });
});
