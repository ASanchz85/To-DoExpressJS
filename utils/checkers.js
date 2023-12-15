export const checkId = (paramsIdToCheck, arrayContainer) => {
  let taskFounded = arrayContainer.find((task) => task.id === paramsIdToCheck);
  let taskFiltered = arrayContainer.filter((task) => task.id !== paramsIdToCheck);
  let taskIndex = arrayContainer.findIndex((task) => task.id === paramsIdToCheck);

  return { taskFounded, taskFiltered, taskIndex };
};
