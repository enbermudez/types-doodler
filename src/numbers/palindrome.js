import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  num: Joi.number().required()
});

export default (fields) => {
  const { num } =  validator(schema, { ...fields });

  if (num < 0) return false;

  let reversed = 0;
  let copy = num;

  while (copy > 0) {
    const lastDigit = copy % 10;
    reversed = (reversed * 10) + lastDigit;
    copy = (copy / 10) | 0;
  }

  return num === reversed;
};
