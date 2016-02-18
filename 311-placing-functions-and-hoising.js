/*
Problem
You’re not sure where to place your function to ensure it’s accessible when needed.
HOISING --> in JS all variable declarations are moved to the top of their scope (hoised), declaration, not instantiation.
If you acces a variable that's not defined you get a reference error
If you access to a variable before is declared you'll get an undefined
*/

// declarative --> anywhere in the code
// function expression --> before it is used

debug(a);
var a = 'hello';
// --> undefined

debug(a); // --> undefined
var a = 'hello'; // --> 'hello'

debug(declarativeFunctionTest()); // --> 'test() called' HOISING!
function declarativeFunctionTest(){
	debug('declarative function test called');
}

debug(functionalExpressionTest); // --> reference error: can't find variable
var test = function(){
	debug('functional expression test() called');
}