import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  number: Joi.number().required()
});

export default (fields) => {
  const { number } =  validator(schema, { ...fields });

  if (number < 0) return false;

  let reversed = 0;
  let copy = number;

  while (copy > 0) {
    const lastDigit = copy % 10;
    reversed = (reversed * 10) + lastDigit;
    copy = (copy / 10) | 0;
  }

  return number === reversed;
};
