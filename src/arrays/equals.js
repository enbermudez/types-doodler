import Joi from 'joi';
import validator from '../validator';

const schema = Joi.object({
  array1: Joi.array().min(1).required(),
  array2: Joi.array().min(1).required(),
  ordered: Joi.boolean().default(false)
});

export default (fields) => {
  const { array1, array2, ordered } = validator(schema, { ...fields });

  const arr1 = [...array1];
  const arr2 = [...array2];

  if (ordered) {
    arr1.sort();
    arr2.sort();
  }

  let i = arr1.length;
  while (i--) if (arr1[i] !== arr2[i]) return false;

  return true;
};
