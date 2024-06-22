import { Controller } from "../decorators/Controller";
import { Get } from "../decorators/Route";
import { Request, Response } from "express";

@Controller("/")
export class RootController {
	@Get("/")
	get(_req: Request, res: Response) {
		res.json({
			message: "Hello, World!",
		});
	}
}
