import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  string: Joi.string().min(1).required(),
  insensitive: Joi.boolean().default(false)
});

export default (fields) => {
  const { string, insensitive } = validator(schema, { ...fields });

  let str = string;

  if (insensitive) str = string.toLowerCase();

  const map = {};

  for (let i = 0; i < str.length; i++) {
    const character = str.charAt(i);
    if (map[character]) map[character]++;
    else map[character] = 1;
  }

  return map;
};
