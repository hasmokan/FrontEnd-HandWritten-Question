interface Todo {
	title: string;
	description: string;
}

type A1 = Required<Todo>;
type A2 = Partial<Todo>;
