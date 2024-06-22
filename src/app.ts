import express from "express";
import { UserController } from "./controllers/UserController";
import { registerRoutes } from "./utils/registerRoutes";
import "reflect-metadata";
import { RootController } from "./controllers/RootController";

const app = express();
const port = 3000;
const host = "0.0.0.0";

app.use(express.json());

registerRoutes(app, [UserController, RootController]);

app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
