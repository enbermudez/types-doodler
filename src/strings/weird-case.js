import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  string: Joi.string().min(1).required(),
  separator: Joi.string().length(1).max(1).default(' ')
});

export default (fields) => {
  const { string, separator } = validator(schema, { ...fields });

  return string.split(separator).map((word) => {
    return word.split('').map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(separator);
};
