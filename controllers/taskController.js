import { checkId } from "../utils/checkers.js";
import { tasks } from "../utils/constants.js";
import { uuidGen } from "../utils/uuid.js";

const getAllTasks = (req, res) => {
  res.render("index", { title: "To-Do App with Espress.js", tasks });
};

const getAddTaskFrom = (req, res) => {
  res.render("add", { title: "Add a new task" });
};

const addTask = (req, res) => {
  const { title, description } = req.body;
  const id = uuidGen();
  const newTask = {
    id,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.redirect("/");
};

const getEditTaskFrom = (req, res) => {
  const task = checkId(req.params.id, tasks).taskFounded;

  if (!task) res.redirect("/");

  res.render("edit", { title: "Edit Task", task });
};

const editTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) tasks[taskIndex] = { id: taskIndex + 1, ...req.body };

  res.redirect("/");
};

const completeTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) tasks[taskIndex].completed = true;

  res.redirect("/");
};

const uncompletedTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) tasks[taskIndex].completed = false;

  res.redirect("/");
};

const deleteTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) tasks.splice(taskIndex, 1);

  res.redirect("/");
};

export default {
  getAllTasks,
  getAddTaskFrom,
  addTask,
  getEditTaskFrom,
  editTask,
  completeTask,
  uncompletedTask,
  deleteTask,
};
