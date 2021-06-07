import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  number: Joi.number().required()
});

export default (fields) => {
  const { number } =  validator(schema, { ...fields });

  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
    if(number % i === 0) return false;

  return number > 1;
};
