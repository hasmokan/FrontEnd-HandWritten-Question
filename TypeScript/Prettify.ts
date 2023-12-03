type Prettify<T> = { [K in keyof T]: T[K] } & {};

type A = {
	name: string;
	age: number;
};

type B = A & {
	isOld: boolean;
};

type Prettified = Prettify<B>;
