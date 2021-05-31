export default (str, separator = ' ') => {
  if (typeof str !== 'string') throw new Error('No string provided.');
  if (!str.length) return str;
  if (typeof separator !== 'string') throw new Error('The separator must be a string.');

  return str.split(separator).map((word) => {
    return word.split('').map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(separator);
};
