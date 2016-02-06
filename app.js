//+ is how JS adding two values together
var a = 22;
var b = 10;
var c = a + b;

console.log(c);

// - is how JS subtracting one value from another
var i = 30;
var x = 5;
var y = i - x;

console.log(y);

// / is how JS is dividing one value in another
var a = 11 / 2

console.log(a);

// * is how JS is multiplying // Nan -  not a number
var f = "foo" * 2;

console.log(f);

// % is how JS show you the reminder of a division.

var i = 23 % 2;

console.log(i);

//Increment ++ JS is adding 1 to its operand and return the value/
// Postfix x++ return the value before Increment
// Prefix ++x return the value after Increment

var a = 6;
var b = a++;

console.log(a);
console.log(b);

var b = 4;
var g = ++b;

console.log(g);
console.log(b);


//Decrement -- JS is subtracting 1 from its operand and return the value.
// Postfix x-- return value before Decrement
// Prefix --x return value after Decrement
var a = 10;
var b = --a;

console.log(b);
console.log(a);

var i = 6;
var x = i--;

console.log(x);
console.log(i);

//Unary negation
// comes before its operand and makes it negative
var x = 7;
var y = -x;

console.log(x);
console.log(y);

//Unary plus
// easiest way to convert something into number- Unary plus
// Unary negation will also convert to a number but will also make it a nagative.
var y = "3";
var x = +y;

console.log(y);
console.log(x);

// true equals 1
// false equal 0
// null equals 0
var x = +true;

console.log(x);

var i = +false;

console.log(i);

var a = +null;

console.log(a);
