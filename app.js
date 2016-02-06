var a = 22;
var b = 10;
var c = a + b;

console.log(c);


// The "+" operator in js adds two numbers together
var addition = 350 + 500;
console.log(addition);

// The "-" operator in js subtracts to numbers from one another
var subtraction = 200 - 37;
console.log(subtraction);

// The "/" operator in js divides two number
var division = 30 / 5;
console.log(division);

// The "*" operator in js multiplies two numbers
var multiplication = 200 * 500;
console.log(multiplication);

// The "%" operator in js divides two numbers but only returns the remainder of the division
var remainder = 40 % 7;
console.log(remainder);

// The "++" operator in js adds one to any number x + 1 is equal to x++
var plusOne = 998;
plusOne++;
++plusOne;
console.log(plusOne);

// The "--" operator in js subtracts one from any number x - 1 is equal to x--
var minusOne = 1002;
minusOne--;
--minusOne;
console.log(minusOne);

// The "-" operator in js used as a unary negation (-x) transforms a number into its negative value

var negation = 10;
negation = -negation;
console.log(negation);

// The "+" operator in js used as a unary plus (+x) multiplies the value by +1 and converts it to an integer

var posInt = 7; //Should be positive
var negInt = -7; //Should still be negative
var string = "7"; //Should be converted to int

+posInt;
console.log(posInt);

+negInt;
console.log(negInt);

+string;
console.log(string);
