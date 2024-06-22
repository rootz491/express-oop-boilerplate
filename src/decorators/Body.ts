import "reflect-metadata";

export function Body(): ParameterDecorator {
	return (target, propertyKey, parameterIndex) => {
		const existingBodyParameters: number[] =
			Reflect.getOwnMetadata("body_parameters", target, propertyKey) || [];
		existingBodyParameters.push(parameterIndex);
		console.log(existingBodyParameters, target, propertyKey);
		Reflect.defineMetadata(
			"body_parameters",
			existingBodyParameters,
			target,
			propertyKey
		);
	};
}
