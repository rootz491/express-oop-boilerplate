import "reflect-metadata";

export function Controller(prefix: string): ClassDecorator {
	return (target: any) => {
		Reflect.defineMetadata("prefix", prefix, target);

		/*
		// Store a reference to the original constructor
		const original = target;

		// A utility function to generate instances of a class
		function construct(constructor: any, args: any) {
			const c: any = function () {
				return new constructor(...args);
			};
			c.prototype = constructor.prototype;
			return new c();
		}

		// The new constructor behavior
		const f: any = function (...args: any) {
			return construct(original, args);
		};

		// Copy prototype so instanceof operator still works
		f.prototype = original.prototype;

		// Return the new constructor (will override original)
		return f;
		*/
	};
}
