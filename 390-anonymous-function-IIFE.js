/*
Problem
You need to create a variable that maintains state between function calls, but you want to avoid global variables.
Immediately-Invoked Function Expression (IIFE)
*/

// --> (function(){})();
(function(){
	var i = 0;

	function increment(){
		i++;
		debug('value is ' + i);
	}

	function runIncrement(){
		while(i < 5){
			increment();
		}
	}

	// window.onload=function(){
	// 	runIncrement();	
	// }
	runIncrement();
})();

/*
An anonymous function surrounds the global values, is immediately evaluated, and then never evaluated again
you can create as many variables as you need without polluting the global space
or colliding with global variables used in other libraries.
*/