import { weirdCase } from '../../src/strings';

describe('Weird Case', () => {
  it('Should throw an error if no string is provided', () => {
    expect(() => weirdCase(false)).toThrow('No string provided');
  });

  it('Should return the same value if 0 length string is provided', () => {
    expect(weirdCase('')).toEqual('');
  });

  it('Should return a weird-cased string - no separator provided', () => {
    expect(weirdCase('This is so weird')).toEqual('ThIs Is So WeIrD');
  });

  it('Should return a weird-cased string - separator provided', () => {
    expect(weirdCase('This-is-so-weird', '-')).toEqual('ThIs-Is-So-WeIrD');
  });

  it('Should throw an error if the provided separator is not a string', () => {
    expect(() => weirdCase('This-is-so-weird', false)).toThrow('The separator must be a string.');
  });
});
