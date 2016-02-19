/*
Problem
You want to create a function that can remember data, but without having to use global variables and without resending the same data with each function call.
*/

function greetingMaker(greeting){
	function addName(name){
		return greeting + ' ' + name;
	}
	return addName;
}

var daytimeGreeting = greetingMaker('Good morning');
var nighttimeGreeting = greetingMaker('Good evening');

//debug(daytimeGreeting(name)); --> Reference error cannot find var name
debug(daytimeGreeting()); // --> good morning undefined
debug(daytimeGreeting('sausage')); // --> good morning sausage
//debug(daytimeGreeting(addName('bacon'))); // --> Reference error cannot find var addName
debug(nighttimeGreeting('bacon')); // --> good evening bacon

/*
We want to avoid cluttering up the global space with variables, as much as possible. However, there are times when you need to store data to be used across several function calls, and you don’t want to have to repeatedly send this information to the function each time.
A way to persist this data from one function to another is to create one of the functions within the other, so both have access to the data, and then return the inner function from the outer. Returning one function from another, when the returned function is using the outer function’s scope, is known as a function closure
*/

/* TESTS CLOSURES */

function outer(x){
	return function(y){
		return x * y;
	}
}
var multiThree = outer(3);
//debug(multiThree); // --> function is printed
debug(multiThree(2)); //> 6
debug(multiThree(3)); //> 9