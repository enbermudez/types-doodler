import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  str: Joi.string().min(1).lowercase().required()
});

export default (fields) => {
  const { str } = validator(schema, { ...fields }, true);

  const len = Math.floor(str.length / 2);

  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
};
