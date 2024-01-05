function getPropValue<T extends object, Key extends keyof T>(
	obj: T,
	key: Key
): T[Key] {
	return obj[key];
}
