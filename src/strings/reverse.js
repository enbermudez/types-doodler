import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  string: Joi.string().min(1).required(),
  whole: Joi.boolean().default(false),
  separator: Joi.string().length(1).max(1).default(' ')
});

export default (fields) => {
  const { string, whole, separator } = validator(schema, { ...fields });

  if (!whole) {
    return string.split(separator).map((word) => {
      return word.split('').reverse().join('');
    }).join(separator);
  }

  return string.split('').reverse().join('');
};
