import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  string: Joi.string().min(1).lowercase().required()
});

export default (fields) => {
  const { string } = validator(schema, { ...fields }, true);

  const len = Math.floor(string.length / 2);

  for (let i = 0; i < len; i++)
    if (string[i] !== string[string.length - i - 1])
      return false;
  return true;
};
