var a = 22;
var b = 10;
var c = a + b;

console.log(c);
// The mathematical operator '+' is how javascript adds two values together

var d = 11;
var e = 19
var f = d - e;

console.log(f);
// The mathematical operator '-' is how javascript finds the difference btwn two values

var g = 21;
var h = 7;
var i = (g/h);

console.log(i);
// The mathematical operator '/' is how javascript finds the quotient of two values

var j = 3;
var k = 42;
var l = j*k;

console.log(l);
// The mathematical operator '*' is how javascript finds the product of two values


var m = 10;
var n = m++;

console.log(n);
// The mathematical operator '++' is how javascript increments a value by 1


var o = 54;
var p = o--;

console.log(p);
// The mathematical operator '--' is how javascript decrements a value by 1


var aa = 20;
var bb = 6;
var cc = aa % bb;

console.log(cc);
// The mathematical operator '%' (modulo )is how javascript finds the integer remainder
// of two values

var dd = 5
var ee = -dd

console.log(ee);
// The mathematical operator '-' is can also be called 'unary negation' and negates  an integer.
// or makes positive a negative integer

ff = true

console.log(+ff);
// The mathematical operator '+'can also be called unary plus and can turn an number
// or a string or even a boolean into a number. (+true evaluates to 1)

var ab = 5.7

console.log(Math.round(ab));
// The mathematical operator 'Math.round' is how javascript uses normal rounding
// rules, round up if >= 0.5 and down if < 0.5  to the nearest integer

var ba = 5.7

console.log(Math.floor(ba));
// The mathematical operator 'Math.floor' will always round a decimal down to
//the nearest whole integer actually to the nearest decicmal if there is more
//than one decimal place

var bc = 9.1
console.log(Math.floor(bc));
// The mathematical operator 'Math.floor' will always round a decimal up to
//the nearest whole integer or actually to the nearest decicmal if there is more
//than one decimal place

Math.random()
//The Math.random() function returns a floating-point, pseudo-random number in the range
//[0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then
//scale to your desired range. The implementation selects the initial seed to the random
//number generation algorithm; it cannot be chosen or reset by the user.

//eamples
// Returns a random number between 0 (inclusive) and 1 (exclusive)
// function getRandom() {
//   return Math.random();
// }
// // Returns a random number between min (inclusive) and max (exclusive)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// // Returns a random integer between min (included) and max (excluded)
// // Using Math.round() will give you a non-uniform distribution!
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// // Returns a random integer between min (included) and max (included)
// // Using Math.round() will give you a non-uniform distribution!
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Math.random() * (11 - 1) + 1);

var x = 10, y = -20;
var z = Math.min(x, y);

console.log(z);
//Math.min() finds the minimum value of a set, is good for finding and setting boundaries

var xx = 10, yy= -20;
var zz = Math.max(xx, yy);

console.log(zz);
//Math.min() finds the maximum value of a set, is good for finding and setting boundaries
