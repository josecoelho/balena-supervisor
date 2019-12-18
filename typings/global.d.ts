interface Dictionary<T> {
	[key: string]: T;
}

type Callback<T> = (err?: Error, res?: T) => void;

type Nullable<T> = T | null | undefined;

type UnwrappedPromise<T> = T extends {
	then(onfulfilled?: (value: infer U) => unknown): unknown;
}
	? U
	: T;

type DeepPartial<T> = T extends object
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: T;
