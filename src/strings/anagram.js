import Joi from 'joi';
import validator from '../validator';
import charmap from './charmap';

const schema = Joi.object({
  string1: Joi.string().min(1).required(),
  string2: Joi.string().min(1).required(),
  insensitive: Joi.boolean().default(false)
});

export default (fields) => {
  const { string1, string2, insensitive } = validator(schema, { ...fields });

  let str1 = string1;
  let str2 = string2;

  if (insensitive) {
    str1 = string1.toLowerCase();
    str2 = string2.toLowerCase();
  }

  if (str1.length !== str2.length) return false;

  const string1Map = charmap({ string: str1});
  const string2Map = charmap({ string: str2 });

  for (const char in string1Map) {
    if (string1Map[char] !== string2Map[char]) {
      return false;
    }
  }

  return true;
};
