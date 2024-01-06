/* 类型编程主要的目的就是对类型做各种转换，那么如何对类型做修改呢？
TypeScript 类型系统支持 3 种可以声明任意类型的变量： type、infer、类型参数。 */

// 1. type叫做类型别名, 相当于声明一个变量来存储
type other = Promise<number>;

// 2. infer 用于变量的提取，然后存储到一个变量里面相当于局部变量
type GetValueType<P> = P extends Promise<infer valueType> ? valueType : never;

// 3. 类型参数用于接受具体的类型，在类型运算中也相当于局部变量：
type isTwo<T> = T extends 2 ? true : false;

/* 数组重新构造 */

// Push
type tuple = [1, 2, 3];
type Push<Arr extends unknown[], Element> = [...Arr, Element];
type PushResult = Push<tuple, 4>;

// Unshift
type Unshift<Arr extends unknown[], Element> = [Element, ...Arr];
type UnshiftResult = Unshift<tuple, 0>;

// Pop
type Pop<Arr extends unknown[]> = Arr extends [...infer Rest, unknown]
	? Rest
	: never;
type ArrPopResult = Pop<tuple>;

// shift
type Shift<Arr extends unknown[]> = Arr extends [unknown, ...infer Rest]
	? Rest
	: never;
type ArrShiftResult = Shift<tuple>;

/* Zip */
type tuple1 = [1, 2];
type tuple2 = ["hasmokan", "xiaoha"];

// type tuple = [[1, 'guang'], [2, 'dong']];
type Zip<
	One extends [unknown, unknown],
	Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
	? Other extends [infer OtherFirst, infer OtherSecond]
		? [[OneFirst, OneSecond], [OtherFirst, OtherSecond]]
		: []
	: [];

// 任意个合并
// type tuple = [[1, 'guang'], [2, 'dong']];
type Zip2<
    One extends unknown[], 
    Other extends unknown[]
> = One extends [infer OneFirst, ...infer OneRest]
	? Other extends [infer OtherFirst, ...infer OtherRest]
		? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
		: []
	: [];

type Zip2Result<tupleTest1, tupleTest2> = Zip2<
	[1, 2, 3, 4, 5],
	[2, 3, 4, 3, "dong"]
>;
