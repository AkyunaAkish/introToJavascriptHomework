// Math.round()
//if the fractional portion of number if 0.5 or bigger it will round it up
//if its less than 0.5 it will round it to 0
//so its basically decimal rounding..

var x = Math.round(37.85);
console.log(x);

var y = Math.round(43.23);
console.log(y);

//Math.random() gives a random floating number between (including) 0 up to (not including) 1.

function getRandom(){
  return Math.random();
};
console.log(getRandom());

function getNum() {
  return Math.floor(Math.random());
};
console.log(getNum());

//Math.min() function return the smallest of zero or more number
// if no argumnets given it will return Infinity
// if one argument is not a number it will return Nan

var x = 2
var i = 10
var y = 8.7
var z = Math.min(x, i, y);
console.log(z);


//Math.max() function returns the largest of zero or more numbers
// if no argumnets given it will return Infinity
// if one argument is not a number it will return Nan
//! this is what I should have used for the application challange!!

var i = Math.max(3, 67, 8.9, 0.33);
console.log(i);

var arr = [1, 3, 5, 7];
var big = Math.max(...arr);
console.log(big);

//Math.floor() will return the largest integer less than or equal to a given number.

var i = Math.floor(76.99);
console.log(i);
