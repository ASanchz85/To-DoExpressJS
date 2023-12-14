import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorController from "./controllers/errorController.js";
import route from "./routes/main.routes.js";

//?? conservamos la variable dirname como estandar proviniente del common.js de node.js.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
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
app.use("/", route);

app.use(errorController.error404);

//initialization
app.listen(port, () => {
  console.log(`MVC project app listening at http://localhost:${port}`);
});
