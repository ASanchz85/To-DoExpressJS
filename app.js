import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
//conservamos la variable dirname como estandar proviniente del common.js de node.js.
const app = express();
const port = 3000;

//settings
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//routes
app.get("/", taskController.getAllTasks);
app.get("/add", taskController.getAddTaskFrom);
app.post("/add", taskController.addTask);
app.get("/edit/:id", taskController.getEditTaskFrom);
app.post("/edit/:id", taskController.editTask);
app.get("/complete/:id", taskController.completeTask);
app.get("/uncompleted/:id", taskController.uncompletedTask);
app.get("/delete/:id", taskController.deleteTask);

app.use(errorController.error404);

//initialization
app.listen(port, () => {
  console.log(`MVC project app listening at http://localhost:${port}`);
});
