/*
You want to safely create a JavaScript object from JSON. You also want to replace the numeric representation of true and false (1 and 0, respectively) with their Boolean counterparts (true and false).
*/

// Note the use of double quotes ("") rather than single, which are not allowed in JSON!!!
var jsonobj = '{"test" : "value1", "test2" : 3.44, "test3" : 0}';
// ECMAScript5 JSON built-in capability
var obj = JSON.parse(jsonobj , function(key,value){
	if (typeof value == 'number') {
		if (value == 0) {
			value = false;
		} else if (value == 1) {
			value = true;
		}
	}
	return value;
});
console.log(obj.test3); //false
