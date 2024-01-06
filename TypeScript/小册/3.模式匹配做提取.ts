/* 数组匹配 */

// First
type arr = [1, 2, 3];
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
	? First
	: never;
type GetFirstResult = GetFirst<[1, 2, 3]>;

// Last
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
	? Last
	: never;
type GetLastResult = GetLast<[1, 2, 3]>;

// PopArr
type PopArr<Arr extends unknown[]> = Arr extends []
	? []
	: Arr extends [...infer Rest, unknown]
	? Rest
	: never;
type PopResult = PopArr<[1, 2, 3]>;
type PopResult2 = PopArr<[1, 2, 3]>;

// ShiftArr
type ShiftArr<Arr extends unknown[]> = Arr extends []
	? []
	: Arr extends [unknown, ...infer Rest]
	? Rest
	: never;

/* 字符串匹配 */

// StartsWith
type StartsWith<
	Str extends string,
	Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;
type StartsWithResult = StartsWith<"guang and dong", "guang">;
type StartsWithResult2 = StartsWith<"guang and dong", "dong">;

// Replace
type ReplaceStr<
	Str extends string,
	From extends string,
	To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
	? `${Prefix}${To}${Suffix}`
	: Str;
type ReplaceResult = ReplaceStr<"hasmokan's best friend is ?", "?", "Dingding">;
type ReplaceResult2 = ReplaceStr<"abc", "?", "Dingding">;

// Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
	| " "
	| "\n"
	| "\t"}`
	? TrimStrRight<Rest>
	: Str;
type TrimStrLeft<Str extends string> = Str extends `${
	| " "
	| "\n"
	| "\t"}${infer Rest}`
	? TrimStrLeft<Rest>
	: Str;

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>;
type TrimResult = TrimStr<"            hasmokan       ">;

/* 函数匹配 */

// GetParameters   初看看不懂!!!!
type GetParameters<Func extends Function> = Func extends (
	...args: infer Args
) => unknown
	? Args
	: never;
type ParametersResult = GetParameters<(name: string, age: number) => string>;

// GetReturnType  涉及到逆变  参数列表不能使用 unknown
type GetReturnType<Func extends Function> = Func extends (
	...ags: any[]
) => infer ReturnType
	? ReturnType
	: never;
type ReturnTypeResult = GetReturnType<(name: string, age: number) => string>;

/* 构造器匹配 */
// GetInstanceType
interface Person {
	name: string;
}
interface PersonConstrucotr {
	new (name: string): Person;
}
type GetInstanceType<ConstructorType extends new (...args: any) => any> =
	ConstructorType extends new (...args: any) => infer ConstructorType
		? ConstructorType
		: never;
type GetInstanceTypeResult = GetInstanceType<PersonConstrucotr>;

// GetConstructorParameters
type GetConstructorParameters<
	ConstructorType extends new (...args: any) => any
> = ConstructorType extends new (...args: infer ParametersType) => any
	? ParametersType
	: never;

interface PersonConstructor {
	new (name: string): Person;
}
type GetConstructorParametersResult =
	GetConstructorParameters<PersonConstrucotr>;

/* Ref匹配 React会用？ */
type GetRefProps<Props> = "ref" extends keyof Props
	? Props extends { ref?: infer Value | undefined }
		? Value
		: never
	: never;

type GetRefPropsResult = GetRefProps<{ ref?: 1, name: 'dong'}>
type GetRefPropsResult2 = GetRefProps<{ ref?: undefined, name: 'dong'}>


/*
总结
就像字符串可以匹配一个模式串提取子组一样，TypeScript 类型也可以匹配一个模式类型提取某个部分的类型。

TypeScript 类型的模式匹配是通过类型 extends 一个模式类型，把需要提取的部分放到通过 infer 声明的局部变量里，后面可以从这个局部变量拿到类型做各种后续处理。

模式匹配的套路在数组、字符串、函数、构造器、索引类型、Promise 等类型中都有大量的应用，掌握好这个套路能提升很大一截类型体操水平。
*/
