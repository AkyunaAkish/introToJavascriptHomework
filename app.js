// addition
// the mathematical operator '+' simply adds the second value to the first value.
var a = 22;
var b = 10;
var addition = a + b;
console.log(addition);

// subtraction
// the mathematical operator '-' simply subtracts the second value to the first value.
var a = 22;
var b = 10;
var subtraction = a - b;
console.log(subtraction);

// multiplication
// the mathematical operator '*' simply multiplies the first and second value.
var a = 22;
var b = 10;
var multiplication = a * b;
console.log(multiplication);

// division
// the mathematical operator '/' simply divides the first value by the second value.
var a = 20;
var b = 10;
var division = a / b;
console.log(division);

// remainder
// the mathematical operator '%' divides the first value by the second value, and then returns the remainder.
var a = 22;
var b = 10;
var remainder = a % b;
console.log(remainder);

// exponentiation
// the mathematical operator '**' makes the second value an exponent. In the following example, var a is being squared (since var b is a '2').
// also, I wrote the statement in an alternative way becuase I had trouble getting my shell to read the operator (even when I added the \)
var a = 5;
var b = 2;
var exponentiation = Math.pow(a, b);
console.log(exponentiation);

// increment
// the mathematical operator '++' increments the value by 1.
// if the operator is postfix (ex: a++), it returns the value before incrementing (so the operand appears unchanged).
// if the operator is prefix (ex: ++a), it returns the value after incrementation
var a = 2;
var increment = a++;
console.log(increment);

// decrement
// the mathematical operator '--' decrements the value by 1.
// if the operator is postfix (ex: a--), it returns the value before decrementation (so the operand appears unchanged).
// if the operator is prefix (ex: --a), it returns the value after decrementation.
var a = 22;
var decrement = --a;
console.log(decrement);

// unary negation
//the '-' operator, when placed directly behind a value, negates the operand.
var a = 22;
var b = 10;
var unaryNegation = -a + -b;
console.log(unaryNegation);

// unary plus
// the '+' operator, when placed directly behind a value, transforms the value into a number.
// In the following example, the variables are defined as strings, since they are in quotation marks. Without the unary plus operator, the equation would return 21 ("2" + "1").
var a = "2";
var b = "1";
var unaryPlus = +a + +b;
console.log(unaryPlus);
