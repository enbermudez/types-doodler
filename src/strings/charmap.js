import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  str: Joi.string().min(1).required(),
  insensitive: Joi.boolean().default(false)
});

export default (fields) => {
  const { str, insensitive } = validator(schema, { ...fields });

  let string = str;

  if (insensitive) string = str.toLowerCase();

  const map = {};

  for (let i = 0; i < string.length; i++) {
    const character = string.charAt(i);
    if (map[character]) map[character]++;
    else map[character] = 1;
  }

  return map;
};
