// 元组
type Tuple = [number, string];

// 接口
interface IPerson {
	name: string;
	age: number;
}

// class Person implements IPerson {
//     name: string;
//     age: number;
// }

const obj: IPerson = {
	name: "guang",
	age: 18,
};

// 函数
interface SayHello {
	(name: string): string;
}

const func: SayHello = (name: string) => {
	return "hello," + name;
};

// 构造器
interface Personconstructor {
	new (name: string, age: number): IPerson;
}

function createPerson(ctor: Personconstructor): IPerson {
	return new ctor("guang", 18);
}

// 对象类型、class 类型在 TypeScript 里也叫做索引类型，也就是索引了多个元素的类型的意思。对象可以动态添加属性，如果不知道会有什么属性，可以用可索引签名：

interface IPerson {
	[prop: string]: string | number;
}
const obj1: IPerson = {
	name: "",
	age: 0,
};
obj.name = "guang";
obj.age = 18;

// 枚举
enum Transpiler {
	Babel = "babel",
	Postcss = "postcss",
	Terser = "terser",
	Prettier = "prettier",
	TypeScriptCompiler = "tsc",
}

const transpiler = Transpiler.TypeScriptCompiler;
