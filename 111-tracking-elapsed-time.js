/*
Problem
You want to track the elapsed time between events
*/
'use strict';
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
var initialDate = new Date();
//var finalDate = new Date();
//debug(firstDate);
// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
// Calls a function or executes a code snippet after a specified delay.
// --> var timeoutID = window.setTimeout(code, [delay]);
//var timeOut = window.setTimeout(debug('delayed hello'), 1000); FAIL

var timeoutID;
function testing(){
	//timeoutID = setTimeout(debug('hello'), 2000);
	setTimeout(function() {
		debug('test');
	}, 10);
}
testing();

function delayedDebug(){
	//var test = setTimeout(debug('delayed hello'), 1000);
	setTimeout(function(){
		debug(initialDate);
	}, 1000);
}
function doEvent(){
	var finalDate = new Date();
	var difference = finalDate - initialDate;
	debug(difference);
}
//delayedDebug();