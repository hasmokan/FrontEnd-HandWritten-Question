var object = { a: [{ b: { c: 3 } }] };
function myGet(obj, path, de) {
	if (!obj) {
		return de;
	}
	console.log();
	// myGet()
}

_.get(object, "a[0].b.c");
// => 3

_.get(object, ["a", "0", "b", "c"]);
// => 3

_.get(object, "a.b.c", "default");
// => 'default'
