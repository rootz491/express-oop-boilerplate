import { Controller } from "../decorators/Controller";
import { Get, Post } from "../decorators/Route";
import { Request, Response } from "express";

@Controller("/users")
export class UserController {
	@Get("/")
	getAllUsers(req: Request, res: Response) {
		res.send("Get all users");
	}

	@Post("/")
	createUser(req: Request, res: Response) {
		const body = req.body;
		res.send(`Create a user with data: ${JSON.stringify(body)}`);
	}
}
