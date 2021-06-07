import weirdCase from '../../src/strings/weird-case';

describe('String - Weird Case', () => {
  it('Should throw an error if the "string" provided is not a string', () => {
    expect(() => weirdCase({ string: false })).toThrow('ValidationError: "string" must be a string');
  });

  it('Should theow an error if no "string" is provided', () => {
    expect(() => weirdCase({})).toThrow('ValidationError: "string" is required');
  });

  it('Should return a weird-cased string - no "separator" provided', () => {
    expect(weirdCase({ string: 'This is so weird' })).toEqual('ThIs Is So WeIrD');
  });

  it('Should return a weird-cased string - "separator" provided', () => {
    expect(weirdCase({ string: 'This-is-so-weird', separator: '-' })).toEqual('ThIs-Is-So-WeIrD');
  });

  it('Should throw an error if the provided "separator" is not a string', () => {
    expect(() => weirdCase({ string: 'This-is-so-weird', separator: false })).toThrow('ValidationError: "separator" must be a string');
  });
});
