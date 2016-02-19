# Javascript-Cookbook-Exercises
<a href="http://amzn.to/1OfbGUO ">Javascript Cookbook Book Link</a>

If in the files a call to debug() can be seen instead of a console.foo() is due using JSC so I can test the exercises through the command line without having to use a browser or interface.

I wrote a post about it (Spanish) in aprendejs.es:
<a href="http://wp.me/p77DAf-g">Cómo ejecutar Javascript en Sublime Text</a>

Links related to solving the exercises:

012
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach()</a>
013

111

2. Javascript Arrays

There is no array data type in JavaScript. Instead, support for arrays is managed through the JavaScript Array object.

3. Functions: The JavaScript Building Blocks

A way to encapsulate a block of code in order to reuse the code several times. They are first-class objects in JavaScript, which means they can be treated as an object, as well as an expression or statement.

Three basic ways to create a function: 

function keyword.
Anonymous function is constructed using the new operator and referencing the Function object.
Function literal or function expression

320 Array.reduce() ECMAScript 5
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

##5. javascript and directly accessing the user interface##

502

/* 
The NodeList collection can be traversed like an array, but it isn’t an Array object—you can’t use Array object methods, such as push() and reverse(), with a NodeList. Its only property is length, and its only method is item()
*/

var allElements = document.getElementsByTagName('*');
console.log(allElements);

503

	var imgs = document.querySelectorAll('article img');
	console.log('selected special images: ' + imgs.length);

	/* locating empty alt attribute */
	var emptyAltImg = document.querySelectorAll('img[alt=""]');
	console.log('images without alt attribute: ' + emptyAltImg.length);
	var nonEmptyAltImg = document.querySelectorAll('img:not([alt=""])');
	console.log('good job, ' + nonEmptyAltImg.length + ' have alt attribute');