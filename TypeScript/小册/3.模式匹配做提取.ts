/* 数组匹配 */

// First
type arr = [1, 2, 3]
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never
type GetFirstResult = GetFirst<[1, 2, 3]>

// Last
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never
type GetLastResult = GetLast<[1, 2, 3]>

// PopArr
type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never
type PopResult = PopArr<[1, 2, 3]>
type PopResult2 = PopArr<[1, 2, 3]>

// ShiftArr
type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Rest] ? Rest : never

/* 字符串匹配 */

// StartsWith
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false
type StartsWithResult = StartsWith<'guang and dong', 'guang'>
type StartsWithResult2 = StartsWith<'guang and dong', 'dong'>

// Replace
type ReplaceStr<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str
type ReplaceResult = ReplaceStr<"hasmokan's best friend is ?", "?", 'Dingding'>
type ReplaceResult2 = ReplaceStr<"abc", "?", 'Dingding'>

// Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${' ' | '\n' | '\t'}` ? TrimStrRight<Rest> : Str
type TrimStrLeft<Str extends string> = Str extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimStrLeft<Rest> : Str;

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>
type TrimResult = TrimStr<'            hasmokan       '>


/* 函数匹配 */

// GetParameters   初看看不懂!!!!
type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never
type ParametersResult = GetParameters<(name: string, age: number) => string>


// GetReturnType  涉及到逆变  参数列表不能使用 unknown
type GetReturnType<Func extends Function> = Func extends (...ags: any[]) => infer ReturnType ? ReturnType : never
type ReturnTypeResult = GetReturnType<(name: string, age: number) => string>

