export const checkId = (paramsIdToCheck, arrayContainer) => {
  let taskFounded = arrayContainer.find((task) => task.id === paramsIdToCheck);
  let taskEraseFiltered = arrayContainer.filter(
    (task) => task.id !== paramsIdToCheck
  );
  let taskIndex = arrayContainer.findIndex(
    (task) => task.id === paramsIdToCheck
  );

  return { taskFounded, taskEraseFiltered, taskIndex };
};

export const checkSchema = (data, schema) => {
  let errors = [];
  let keys = Object.keys(schema);
  keys.forEach((key) => {
    if (schema[key].required && !data[key]) {
      errors.push(`${key} is required`);
    }
    if (data[key] && typeof data[key] !== schema[key].type) {
      errors.push(`${key} is not a ${schema[key].type}`);
    }
  });

  if (errors.length === 0) return null;
  else return errors;
};
