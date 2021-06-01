export default (schema, obj) => {
  const { error, value } = schema.validate(obj);

  if (error) throw new Error(error);

  return value;
};
