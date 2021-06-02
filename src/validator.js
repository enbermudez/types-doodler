export default (schema, obj, convert = false) => {
  const { error, value } = schema.validate(obj, { convert });

  if (error) throw new Error(error);

  return value;
};
