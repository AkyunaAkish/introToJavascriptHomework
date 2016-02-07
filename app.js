
//example 1, '+'
var a = 22;
var b = 10;
var c = a + b;

console.log(c); //this executes simple addition

//example 2, '-'
var d = 5 - 6;
console.log(d); //this executes simple subtraction

//exaple 3, '/'
var e = 567/36.5;
console.log(e); //this executes division

//example 4, '%'
var f = 46%5;
console.log(f);//this gives the remainder of the division of these two numbers

//example 5, '++'
var g = 8;
var h = g++;
console.log(g);//this increments the value by exactly 1

//example 6, '--'
var i = 1000;
var j = --i;
console.log(j);//this decrements the value by exactly 1

//example 7, 'Math.round'
var k = Math.round(9999.5678);
console.log(k);//this rounds the number passed into it as an argument

//example 8, 'Math.random()'
var l = Math.random();
console.log(l);//this produces a random number between 0 and 1

//example 9, 'Math.min()'
var m = 45.2;
var n = 45.2001;
var o = Math.min(m, n);
console.log(o);//this method finds the smallest value among the arguments passed in

//example 10, 'Math.max()'
var o = Math.max(m, n);
console.log(o);//this method finds the largest value among the arguments passed in

//example 11, 'Math.floor()'
var p = Math.floor(702.689432156);
console.log(p);//this method produces the value rounded down to the nearest single digit

//example 12, 'Math.ceil()'
var q = Math.ceil(702.689432156);
console.log(q);//this method produces the value rounded up to the nearest single digit
