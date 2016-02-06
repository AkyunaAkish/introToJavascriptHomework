var a = 21;
var b = 2;
var c = 12;
var d = 81;
var e = 22;
var f = 9;
var h = 5;
var i = 72;
var j = 3333;
var k = 9282;
var l = 123;
var m = 91;
var n = -12;
var o = -233;
var p = 'hey';
var add = a + k;
var subt = j - f;
var mult = m * h;
var div = m / i;

// Using +, adds two values together
console.log(add);

// Using -, subtracts two values from each other
console.log(subt);

// Using *, multiplies two values together
console.log(mult);

// Using /, divides two values together
console.log(div);

// Math.round rounds a number
console.log(Math.round(m));

//Math.random generates random #
console.log(Math.random());

//Math.min finds the lowest # in x and y
var x = -321, y = -320; // -321 = answer
var z = Math.min(x, y);
console.log(z)

//Math.max finds the highest # in x and y
var x = -321, y = -320; // -320 = answer
var zz = Math.max(x, y);
console.log(zz)

//Math.floor finds the largest integer less than or = to the given #
console.log(Math.floor(123.231));
console.log(Math.floor(8.8));
console.log(Math.floor(8.999));

//Math.ceil finds the ceiling, the largest interger up from the given #
console.log(Math.ceil(4.00000001));
console.log(Math.ceil(4.000000000000001));
console.log(Math.ceil(5.2));
console.log(Math.ceil(5.3));
console.log(Math.ceil(5.9));