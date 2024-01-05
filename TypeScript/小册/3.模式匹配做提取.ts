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

// StartsWith
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false
type StartsWithResult = StartsWith<'guang and dong', 'guang'>
type StartsWithResult2 = StartsWith<'guang and dong', 'dong'>

