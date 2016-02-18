'use strict';

/*
Problem
You want to verify that a variable is defined, is a string, and is not empty.
*/

var myVariable;

var myStringObject = { object: 'myObject'};
var myStringLiteral = 'my string literal';

/* 1. */

if (typeof myVariable === 'string' && myVariable.length > 0) {
	debug(myVariable + ' is defined and string');
} else {
	debug('nope, your variable have something wrong');	
}

/* 2. */

//'null' is an object in JS --> variables that don't exist are 'undefined', so if we must check the diference between a string object or a string literal we will need a different type of test to check the variable isn't null (and is not an object, but a string literal)
if (myStringObject != 'undefined' && myStringObject) {
	debug(myStringObject + ' is defined');
	// ?? -> If we take off the second part of the logic: && myStringObject, it returns 'undefined is defined'
} else {
	debug(myStringObject + ' is undefined');
}

/* 3. Not working quite well */
// if (((myStringObject != 'undefined' && myStringObject) && myStringObject.length() > 0) && typeof myStringLiteral.valueOf() == 'string') {
// 	debug(myStringObject + ' is defined, string and not null');
// } else {
// 	debug(myStringObject + ' is undefined or is not a string or is null');
// }

/* 4. */
if (myStringLiteral.length !== 0) debug(myStringLiteral + ' is a string');
// Now we need a typeof to check if they're been set or not, will return number, string, boolean, function or --> object if the variable is null, array or another js object, also undefined if the variable is undefined
if (typeof myStringLiteral == 'string' && myStringLiteral.length !== 0) debug(myStringLiteral + ' is a string and non empty');