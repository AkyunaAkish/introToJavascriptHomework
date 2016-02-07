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

//
