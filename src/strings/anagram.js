import Joi from 'joi';
import validator from '../validator';
import charmap from './charmap';

const schema = Joi.object({
  str1: Joi.string().min(1).required(),
  str2: Joi.string().min(1).required(),
  insensitive: Joi.boolean().default(false)
});

export default (fields) => {
  const { str1, str2, insensitive } = validator(schema, { ...fields });

  let string1 = str1;
  let string2 = str2;

  if (insensitive) {
    string1 = str1.toLowerCase();
    string2 = str2.toLowerCase();
  }

  if (string1.length !== string2.length) return false;

  const string1Map = charmap({ str: string1});
  const string2Map = charmap({ str: string2 });

  for (const char in string1Map) {
    if (string1Map[char] !== string2Map[char]) {
      return false;
    }
  }

  return true;
};
