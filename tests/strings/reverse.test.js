import reverse from '../../src/strings/reverse';

describe('String - Reverse', () => {
  it('Should throw an error if the "string" provided is not a string', () => {
    expect(() => reverse({ string: false })).toThrow('ValidationError: "string" must be a string');
  });

  it('Should theow an error if no "string" is provided', () => {
    expect(() => reverse({})).toThrow('ValidationError: "string" is required');
  });

  it('Should throw an error if the "whole" flag is not a boolean', () => {
    expect(() => reverse({ string: 'string', whole: 1 })).toThrow('ValidationError: "whole" must be a boolean');
  });

  it('Should throw an error if the provided "separator" is not a string', () => {
    expect(() => reverse({ string: 'string', separator: 1 })).toThrow('ValidationError: "separator" must be a string');
  });

  it('Should reverse word by word', () => {
    expect(reverse({ string: 'This is reversed word by word!' })).toEqual('sihT si desrever drow yb !drow');
  });

  it('Should reverse the whole string', () => {
    expect(reverse({ string: 'This is entirely reversed', whole: true })).toEqual('desrever yleritne si sihT');
  });

  it('Should reverse the whole string with a provided "separator"', () => {
    expect(reverse({ string: 'This-is-entirely-reversed', whole: true, separator: '-' })).toEqual('desrever-yleritne-si-sihT');
  });
});
