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
