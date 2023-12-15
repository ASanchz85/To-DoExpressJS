import { Router } from "express";
import apiController from "../controllers/apiController.js";

const apiRoute = Router();

apiRoute.get("/", apiController.getAllTasks);
apiRoute.post("/", apiController.addTask);
apiRoute.put("/:id", apiController.editTask);
apiRoute.put("/complete/:id", apiController.completeTask);
apiRoute.put("/uncomplete/:id", apiController.uncompletedTask);
apiRoute.delete("/:id", apiController.deleteTask);

export default apiRoute;