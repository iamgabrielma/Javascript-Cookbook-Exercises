/*
Problem
You want to pass a function as an argument to another function.
*/

var param = function(arg1,arg2){
	debug(arg1 + ' ' + arg2);
}

//debug(param('1','2')); 	--> 1, 2
//							--> undefined
param('1','2');

//AKA high order functions -> functional programming

// traditional way
var nums = [1,2,3,4,5];
var sum = 0;
for (var i = 0; i < nums.length; i++){
	sum+= nums[i];
}
debug(sum); // --> 15

// functional ECMAScript5 through Array.reduce()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
var fNums = [1,2,3,4,5];
var fSum = fNums.reduce(function(n1,n2){return n1+n2;});
debug(fSum); // --> 15