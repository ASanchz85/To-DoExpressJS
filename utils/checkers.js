export const checkId = (paramsIdToCheck, arrayContainer) => {
  let id = parseInt(paramsIdToCheck);
  let taskFounded = arrayContainer.find((task) => task.id === id);
  let taskIndex = arrayContainer.findIndex((task) => task.id === id);

  return { taskFounded, taskIndex };
};
