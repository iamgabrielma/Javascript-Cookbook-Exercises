/*
PROBLEM:
You have a string with several sentences, one of which includes a list of items. The list begins with a colon (:) and ends with a period (.), and each item is separated by a comma. You want to extract just the list.

Before:

This is a list of items: cherries, limes, oranges, apples. 

After:

['cherries','limes','oranges','apples']
*/

// 1. DEFINE SUBSTRING

'use strict';
var string = 'This is a list of items: cherries, limes, oranges, apples.';
var startPoint = string.indexOf(':');
var endPoint = string.indexOf('.');

var listOfItems = string.substring(startPoint+1,endPoint); // +1 includes the ':'

//debug(string); // full string
//debug(startPoint); //23
//debug(endPoint); //57
debug(listOfItems); // substring --> cherries, limes, oranges, apples

// 2. CONVERT SUBSTRING INTO ARRAY

var fruitArray = []
fruitArray = listOfItems.split(',');
debug(fruitArray); // --> [' cherries', ' oranges', ' apples', ' bananas']
debug('typeof: ' + typeof fruitArray); //--> object, arrays are objects in JS

//3. CLEAN UP WHITESPACE

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback[currentValue, index, array])

fruitArray.forEach(function(element, index, array){
	array[index] = element.trim();
});
debug('using forEach: ' + fruitArray); // --> cherries,limes,oranges,apples

// 4. GETTING THE SAME RESULT USING REGULAR EXPRESSIONS

var fruitRegex = listOfItems.split(/\s*,\s*/);
debug('fruitRegex:' + fruitRegex);
