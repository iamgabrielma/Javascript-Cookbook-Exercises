/*
Problem
You want to implement a function that will recursively traverse an array and return a string of the array element values, in reverse order.
*/

// functional recursion
// A Fibonacci number is the sum of the two previous Fibonacci numbers.
var fibo = function(n){
	//return n < 2 ? n : fibo(n-1) + fibo(n-2);
	debug(n < 2 ? n : fibo(n-1) + fibo(n-2));
}
//fibo(10);

function factorialFibo(n){
	//return n == 1 ? 1 : n * factorialFibo(n-1);
	debug(n == 1 ? 1 : n * factorialFibo(n-1));
}
//factorialFibo(10);

var reverseArray = function(x, index, string){
	return index == 0 ? string : reverseArray(x, --index,(string+= ' ' + x[index]));
}

var array = ['apple','orange','peach','lime'];
var string = reverseArray(array, array.length, '');
debug(string);

var array2 = ['car','boat','sun','computer']; 
string2 = reverseArray(array2,array2.length,""); 
debug(string2);

/* ADVANCED: TAIL CALL OPTIMIZATION */
//ECMAScript 6 new feature called tail call optimization
function tailCallFactorial(num){
	if (num == 0) {
		return 1;
	} // otherwise, call this recursive procedure again
	else{
		return (num * tailCallFactorial(num - 1));
	}
}
debug(tailCallFactorial(10));