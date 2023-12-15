import { Router } from "express";
import taskController from "../controllers/taskController.js";

const route = Router();

route.get("/", taskController.getAllTasks);
route.get("/add", taskController.getAddTaskFrom);
route.post("/add", taskController.addTask);
route.get("/edit/:id", taskController.getEditTaskFrom);
route.post("/edit/:id", taskController.editTask);
route.get("/complete/:id", taskController.completeTask);
route.get("/uncomplete/:id", taskController.uncompletedTask);
route.get("/delete/:id", taskController.deleteTask);

export default route;