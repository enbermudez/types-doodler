import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  array: Joi.array().min(1).required()
});

export default (fields) => {
  const { array } = validator(schema, { ...fields });

  const shuffled = [ ...array ];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
