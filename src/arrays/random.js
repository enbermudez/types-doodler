import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  arr: Joi.array().min(1).required(),
  qty: Joi.number().min(1).max(Joi.ref('arr.length')).default(1)
});

export default (fields) => {
  const { arr, qty } = validator(schema, { ...fields });

  const results = [...Array(qty)].map(() => arr[Math.floor(Math.random() * arr.length)]);

  return qty > 1 ? results : results[0];
};
