import "reflect-metadata";

export function Get(path: string): MethodDecorator {
	return (
		target,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		Reflect.defineMetadata("method", "get", descriptor.value);
		Reflect.defineMetadata("path", path, descriptor.value);
	};
}

export function Post(path: string): MethodDecorator {
	return (
		target,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		Reflect.defineMetadata("method", "post", descriptor.value);
		Reflect.defineMetadata("path", path, descriptor.value);
	};
}
