import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  num: Joi.number().required()
});

export default (fields) => {
  const { num } =  validator(schema, { ...fields });

  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;

  return num > 1;
};
