export default (schema, obj) => {
  const { error } = schema.validate(obj);
  if (error) throw new Error(error);
};
