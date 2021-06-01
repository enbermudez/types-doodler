import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  str: Joi.string().min(1).required(),
  separator: Joi.string().max(1).default(' ')
});

export default (fields) => {
  const { str, separator } = validator(schema, { ...fields });

  return str.split(separator).map((word) => {
    return word.split('').map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(separator);
};
