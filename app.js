var a = 22;
var b = 10;
var c = a + b;

console.log(c);
// The operator '+' is how javascript adds values together
var addition = 10 + 10;
console.log(addition);

// The operator '-' is how javascript subtracts two values giving you the difference
var subtraction = 99 - 39;
console.log(subtraction);

// The operator '/' is how javascript divides two values
var division = 1260 / 3;
console.log(division);

// The operator '*' is how javascript multiplies
var multiplication = 32 * 94;
console.log(multiplication);

// The '%' operator is how javascript gives you the remainder of two values ie 9 % 2 = 1 (9/2 is equal to 4 with remainder of 1)
var remainder = 11 % 3;
console.log(remainder);

// The operator '++' is how javascript increments a value by 1
var increment = remainder++;
console.log(increment);

// The operator '--' is how javascript decrements a value by 1
var decrement = --increment;
console.log(decrement);

// The operator '-' is how javascript turns a variable to a negative number (Unary negation)
var x = 5;
var unaryNegation = -x;
console.log(x, unaryNegation);

// The operator '+' is how javascript converts other data types to a number equivilent
var numberString = '120';
var unaryPlus = +numberString;
console.log(numberString, unaryPlus);

// Math.round method is how javascript rounds numbers
var d = 21.02387456;
console.log(Math.round(d));

// Math.random method is how javascript can generate a random number from 0-1 or a random integer within a specified range using the function below
console.log(Math.random());
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1,10));

// Math.min method is how javascript returns the smallest of a given number of numbers
var g = 32;
var f = 10;
var h = -3;
console.log(Math.min(g, f, h));

// Math.max method is how javascript returns the largest of a given group of numbers or numerical array of numbers
console.log(Math.max(1, 99));

var arr = [1, 4, 9, 81, 231];
var max = Math.max(...arr);
console.log(max);

// Math.floor method is how javascript returns the next largest integer that is less than or equal to a given number ie Math.floor 32.9 = 32, Math.floor -33.3 = -34 etc (rounds down)
console.log(Math.floor(32.9));
console.log(Math.floor(-33.4));

// Math.ceil method is how javascript returns the next smallest integer that is greater than or equal to a given number ie Math.ceil 32.9 = 33, Math.ceil -33.3 = -33 etc (rounds up)
console.log(Math.ceil(32.9));
console.log(Math.ceil(-33.4));
