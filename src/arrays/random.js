import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  array: Joi.array().min(1).required(),
  quantity: Joi.number().min(1).max(Joi.ref('array.length')).default(1)
});

export default (fields) => {
  const { array, quantity } = validator(schema, { ...fields });

  const results = [...Array(quantity)].map(() => array[Math.floor(Math.random() * array.length)]);

  return quantity > 1 ? results : results[0];
};
