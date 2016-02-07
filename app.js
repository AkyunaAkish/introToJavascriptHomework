//The mathematical operator "+" is how javascript add's 2 values together
var add = 3 + 3;
console.log(add);

//The mathematical operator "-" is how javascript subtracts one value from another
var subtract = 3 - 3;
console.log(subtract);

//The operator "/" divides one value from another
var divide = 3 / 3;
console.log(divide);

//The operator "*" multiplies one value to another
var multiply = 3 * 3;
console.log(multiply);

//The operator (%) divides the first var by the second and outputs the amount left over
var x = 100%9;
console.log(x);

//The operator "++" after the number adds one to the variable after incrementing
var x = 3;
var y = (x++);
console.log(y,x);

//The operator "++" before the number adds one to the variable before incrementing
var x = 3;
var y = (++x);
console.log(y,x);

//The operator "--" before the number subtracts one to the variable before decrementing
var x = 3;
var y = (x--);
console.log(x,y);

//The operator "--" before the number subtracts one to the variable before decrementing
var x = 3;
var y = (--x);
console.log(x,y);

//The operator "- only before the variable or number negates the variable
var unarynegation = 3;
var y = -unarynegation;
console.log(y);

//The operator "+" before the variable or number and makes it a number if it is able to
var unaryplus = +"3";
console.log(unaryplus);

//The operator "Math.round()" rounds the number to the nearest whole number
var x = Math.round(3.49);
console.log(x);

//The operator "Math.random()" selects a random number min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//The operator "Math.min()" selects the minimum number between the given inputs
var x = 10, y = 5;
var z = Math.min(x, y);
console.log(z);

//The operator "Math.max()" selects the maximum number between the given inputs
var x = 10, y = 5;
var z = Math.max(x, y);
console.log(z);

//The operator "Math.floor()" returns the largest integer <= the given inputs
var x = Math.floor(40.99999);
console.log(x);

//The operator "Math.ceil()" returns the largest integer >= the given inputs
var x = Math.ceil(40.0000001);
console.log(x);
