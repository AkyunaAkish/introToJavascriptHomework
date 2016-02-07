var a = 22;
var b = 10;
var c = a + b;

console.log(c);

 // "-" Subtraction is how js subtracts one numerical value from another

var d = a - b;

console.log(d);

// "/" Division is how js divides one numerical value by another

var e = a / b;

console.log(e);

// "*" Multiplication is how js multiplies one numerical value by another

var f = a * b;

console.log(f);

// "%" Modulus is how js returns the remainder of the division of two numerical values

var g = a % b;

console.log(g);

// "++" Increment is how js returns a numercal value before adding 1 ("x++") or after adding 1 ("++x")

var h = a;

console.log(h, ++h);

// "--" Decrement is how js returns a numercal value before subtracting 1 ("x--") or after subtracting 1 ("--x")

var i = a;

console.log(i, --i);

// "-" Unary Negation is how js negates a numerical values

var j = -a;

console.log(j);

// "+" Unary Plus is how js returns a numerical value for a it's operand if it is already... examples: for 3 and "3" returns 3; for true, false, and null returns 1,0,0 respectively

var k = +a;

console.log(k);

// "math.round(x)" takes some numerical value and, if the fractional part of the value is less than .5 it rounds it down, if greater than .5 it rounds it up

var l = Math.round(22.5);

console.log(l);

//"Math.random()" returns a random number between 0 and 1 (floating point), or within a range when min and max parameters are defined

var m = Math.random();

console.log(m);

//"Math.min()" returns the smallest of 0 or more numbers. If no arguments are supplied then the method returns infinity; if at least one of the arguments provided cannot be converted to a number then the method returns 'NaN'

var n = Math.min(3, 4, 9, 6, 2);

console.log(n);

//"Math.max" returns the largest of 0 or more numbers. If no arguments are supplied then the method returns infinity; if at least one of the arguments provided cannot be converted to a number then the method returns 'NaN'

var o = Math.max(3, 4, 9, 6, 2);

console.log(o);

//"Math.floor" returns the largest integer that is less than or equal to a given number

var p = Math.floor(3.14);

console.log(p);
