import { Express, Request, Response } from "express";
import "reflect-metadata";

export function registerRoutes(app: Express, controllers: any[]) {
	controllers.forEach((controller) => {
		const instance = new controller();
		const prefix = Reflect.getMetadata("prefix", controller) || "";
		const methods = Object.getOwnPropertyNames(controller.prototype).filter(
			(prop) => prop !== "constructor"
		);

		methods.forEach((method) => {
			const routeHandler = instance[method];
			const routePath = Reflect.getMetadata("path", routeHandler);
			const httpMethod = Reflect.getMetadata("method", routeHandler);

			if (routePath && httpMethod) {
				app[httpMethod](
					`${prefix}${routePath}`,
					(req: Request, res: Response) => {
						const bodyParameters: number[] =
							Reflect.getOwnMetadata("body_parameters", instance, method) || [];

						const args = [];
						for (let i = 0; i < routeHandler.length; i++) {
							if (bodyParameters.includes(i)) {
								args.push(req.body);
							} else if (i === routeHandler.length - 2) {
								args.push(req);
							} else if (i === routeHandler.length - 1) {
								args.push(res);
							} else {
								args.push(undefined);
							}
						}

						routeHandler.apply(instance, args);
					}
				);

				console.log(
					`Registered route: ${httpMethod.toUpperCase()} ${prefix}${routePath}`
				);
			}
		});
	});
}
