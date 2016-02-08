// The mathematical operator '+' adds two values together.
var a = 22;
var b = 10;
var c = a + b;
console.log("addition: " + c);

// The mathematical operator '-' subtracts one value from another.
var d = 22;
var e = 10;
var f = d - e;
console.log("subraction: " + f);

// The mathematical operator '/' is how Javascript divides numbers.
var divide = 20;
var dividend = divide/2;
console.log("division: " + dividend);

// The mathematical operator '*' is how Javascript multiplies numbers.
var mult = 20;
var multiply = mult * 2;
console.log("multiply: " + multiply);

// The mathematical operator '%' is called modulo. It divides two numbers
// and returns the remainder
var div = 21;
var mod = div % 2;
console.log("modulo: " + mod);

//The mathematical operator '**'

// The mathematical operator '++' adds one to the given value. Increment.
var update = 0;
update++;
console.log("Increment: " + update);

// The mathematical operator '--' subratcts one to the given value. Decrement.
var down_date = 1;
down_date--;
console.log("decrement: " + down_date);

// The mathematical operator '+' with only one value in an expression is the
// Unary Plus operator, which turns the operand into a number.
var unary_plus = '3';
unary_plus = +'3';
console.log("unary plus: " + unary_plus);

// The mathematical operator '+=' is equivalent to
// plus equals = plus_equals + 2;
var plus_equals = 2;
plus_equals += 2;
console.log("plus equals: " + plus_equals);

// The mathematical operator '-=' is equivalent to
// minus_equals = minus_equals - 2;'
var minus_equals = 2;
minus_equals -= 2;
console.log("minus equals: " + minus_equals);

// The mathematical operator '++' adds one to the given value.
var update = 0;
update++;
console.log("update: " + update);

//Math.round takes a value and returns it rounded to the nearest whole numner.
//Ex.
//round_1 would equal 2.
var round_1 = Math.round(1.6);
console.log("round 1: " + round_1);
//round_2 would equal 1.
var round_2 = Math.round(1.4);
console.log("round 2: " + round_2);

//Math.random returns a psuedo random number between 0 and 1, which can be used to generate other random
//numbers in a bigger range through multiplication.
//Ex.
var random = Math.random(); //random would equal a random number between 1 and 5
console.log("random: " + random);

//Math.min takes an array (range of values) and returns the smallest value in the array.
//Ex.
var min = Math.min(1,2,3,4,5); //would return 1.
console.log("min: " + min);

//Math.max takes a range of values and returns the largest value in the array
//Ex.
var max = Math.max(1,2,3,4,5); //would return 5.
console.log("max: " + max);

//Math.floor effecetively chops off decimals of a given number and returns a whole number.
//Ex.
var floor = Math.floor(1.2); //floor would equal 1.
console.log("floor: " + floor);

//Math.ciel takes a number and returns a value that is rounded up even if that number was something below .5
//Ex.
var ciel = Math.ceil(1.2); //ciel would equal 2.
console.log("ceil: " + ciel);
