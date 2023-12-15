import { checkId, checkSchema } from "../utils/checkers.js";
import { tasks } from "../utils/constants.js";
import { messages } from "../utils/jsonMessages.js";
import {uuidGen} from "../utils/uuid.js";
import { schema } from "../models/schema.js";

const getAllTasks = (req, res) => {
  res.status(200).json(messages(200, tasks));
};

const getOneTask = (req, res) => {
  let taskFounded = checkId(req.params.id, tasks).taskFounded;

  if (taskFounded) {
    res.status(200).json(messages(200, taskFounded));
  } else {
    res.status(404).json(messages(404));
  }
}

const addTask = (req, res) => {
  const checkings = checkSchema(req.body, schema);  
  if (checkings) {
    return res.status(400).json(messages(400, checkings));
  }
  const { title, description } = req.body;
  const id = uuidGen();
  const newTask = {
    id,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(messages(201, newTask));
};

const editTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) {
    tasks[taskIndex] = { id: taskIndex + 1, ...req.body };
    res.status(202).json(messages(202, tasks[taskIndex]));
  } else {
    res.status(404).json(messages(404));
  }
};

const completeTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    res.status(202).json(messages(202, tasks[taskIndex]));
  } else {
    res.status(404).json(messages(404));
  }
};

const uncompletedTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = false;
    res.status(202).json(messages(202, tasks[taskIndex]));
  } else {
    res.status(404).json(messages(404));
  }
};

const deleteTask = (req, res) => {
  let taskIndex = checkId(req.params.id, tasks).taskIndex;

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(202).json(messages(202, tasks));
  } else {
    res.status(404).json(messages(404));
  }
};

export default {
  getAllTasks,
  getOneTask,
  addTask,
  editTask,
  completeTask,
  uncompletedTask,
  deleteTask,
};
