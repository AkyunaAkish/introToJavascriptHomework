//The mathematical operator '+' is how javascript adds values together

var a = 22;
var b = 10;
var c = a + b;

console.log(c);

//The mathematical operator '-' is how javascript subtracts values

var a = 22;
var b = 10;
var c = a - b;

console.log(c);

//The mathematical operator '/' is how javascript divides values
//Includes remainder as decimal

var a = 22;
var c = a / b;
var b = 10;

console.log(c);

//The mathematical operator '*' is how javascript multiplies values

var a = 22;
var c = a * b;
var b = 10;

console.log(c);

//The mathematical operator '%' is how javascript finds just the remainder between values

var a = 22;
var c = a % b;
var b = 10;

console.log(c);

//The mathematical operator '++' is how javascript one is added to a value
//'++' before the identifier '1' is added to the original identifier while and that value is returned 

var a = 22;
var c = ++a;

console.log(a,c);

//'++' after the indentifier '1' is added to the original identifier, however, the original value is returned

var a = 22;
var c = a++;

console.log(a,c);

//The mathematical operator '--' is how javascript one is added to a value
//'--' before the identifier '1' is subtracted to the original identifier while and that value is returned

var a = 22;
var c = --a;

console.log(a,c);

//'--' after the indentifier '1' is subtracted to the original identifier, however, the original value is returned

var a = 22;
var c = a--;

console.log(a,c);

//The operator '-' just before a number is how javascript turns a value negative

var a = 22;
var c = -a;

console.log(c);

//The operator '+' just before a number is how javascript turns a string into a number (or at least attempts to)

var a = "22";
var c = +a;

console.log(c);

//The operator 'Math.round' in javascript rounds to the nearest whole number

console.log(Math.round(22.53));

//The operator 'Math.random' in javascript selects a number between (inclulding) '0' to (not including) '1' 

console.log(Math.random());
