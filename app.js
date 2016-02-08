console.log("Addition");
Add(22, 10);
Add(true, 1);
Add("foo", false);

console.log('\n'+"Subtraction");
Subtract(5, 3);
Subtract(3, 5);
Subtract("foo", 3);

console.log('\n'+"Division");
Divide(1, 2);
Divide(2.0, 0);

console.log('\n'+"Multiply");
Multiply(2, 2);
Multiply(Infinity, 0);
Multiply(Infinity, Infinity);

console.log('\n'+"Remainder");
Modulo(12, 5);
Modulo(2, 3);
Modulo(5.5, 2);

console.log('\n'+"Increment");
var nums = [1, 2, 3, 4];
Increment(nums);

console.log('\n'+"Decrement & Unary");
Unary(10);


function Add(a, b){
  var c = a + b;
  console.log(a +" + "+ b +" = "+ c);
}

function Subtract(a, b){
  var c = a - b;
  console.log(a +" - "+ b +" = "+ c);
}

function Divide(a, b){
  var c = a / b;
  console.log(a +" / "+ b +" = "+ c);
}

function Multiply(a, b){
  var c = a * b;
  console.log(a +" * "+ b +" = "+ c);
}

function Modulo(a, b){
  var c = a % b;
  console.log(a +" % "+ b +" = "+ c);
}


function Increment(array){
  var numPlus = 0;
  var obj = {};
  console.log(array);
  console.log("  " + numPlus);

  for(var i = 0; i < array.length; i++){
    numPlus += array[i];
    if(i < array.length - 1){
      console.log("+ " + numPlus);
    }
  }
  console.log('= ' + numPlus);
}


function Unary(a){
  var x = a;
  console.log("x = "+ x);

  var y = --x;
      x = -y;
  console.log("y = --x = "+ y);
  console.log("x = -y = "+ x);

  var  z = +y;
  console.log("z = +y = "+ z);
}
