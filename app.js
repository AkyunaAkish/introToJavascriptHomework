var mathMod = require('./components/math-mod.js');

console.log("Addition");
mathMod.Add(22, 10);
mathMod.Add(true, 1);
mathMod.Add("foo", false);

console.log('\n'+"Subtraction");
mathMod.Subtract(5, 3);
mathMod.Subtract(3, 5);
mathMod.Subtract("foo", 3);

console.log('\n'+"Division");
mathMod.Divide(1, 2);
mathMod.Divide(2.0, 0);

console.log('\n'+"Multiply");
mathMod.Multiply(2, 2);
mathMod.Multiply(Infinity, 0);
mathMod.Multiply(Infinity, Infinity);

console.log('\n'+"Remainder");
mathMod.Modulo(12, 5);
mathMod.Modulo(2, 3);
mathMod.Modulo(5.5, 2);

console.log('\n'+"Increment");
var nums = [1, 2, 3, 4];
mathMod.Increment(nums);

console.log('\n'+"Decrement & Unary");
mathMod.Unary(10);


