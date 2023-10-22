let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
    description: "Learn Node.js and become a master of it",
  },
  {
    id: 2,
    title: "Learn React.js",
    completed: true,
    description: "Learn React.js and become a master of it",
  },
  {
    id: 3,
    title: "Learn Angular.js",
    completed: false,
    description: "Learn Angular.js and become a master of it",
  },
];

const getAllTasks = (req, res) => {
  res.render("index", { title: "To-Do App with Espress.js", tasks });
};

const getAddTaskFrom = (req, res) => {
  res.render("add", { title: "Add a new task" });
};

const addTask = (req, res) => {
  const { title, description } = req.body;
  const id = tasks.length + 1;
  const newTask = {
    id,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.redirect("/");
};

const getEditTaskFrom = (req, res) => {};

const editTask = (req, res) => {};

const completeTask = (req, res) => {};

const uncompletedTask = (req, res) => {};

const deleteTask = (req, res) => {};

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
