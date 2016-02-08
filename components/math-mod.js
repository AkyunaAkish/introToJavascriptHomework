var mathMod = {

  Add: function(a, b){
    var c = a + b;
    console.log(a +" + "+ b +" = "+ c);
  },

  Subtract: function(a, b){
  var c = a - b;
  console.log(a +" - "+ b +" = "+ c);
  },

  Multiply: function(a, b){
  var c = a * b;
  console.log(a +" * "+ b +" = "+ c);
  },

  Divide: function(a, b){
    var c = a / b;
    console.log(a +" / "+ b +" = "+ c);
  },

  Modulo: function(a, b){
    var c = a % b;
    console.log(a +" % "+ b +" = "+ c);
  },

  Increment: function(array){
    var numPlus = 0;
    console.log(array);
    console.log("  " + numPlus);

    for(var i = 0; i < array.length; i++){
      numPlus += array[i];
      if(i < array.length - 1){
        console.log("+ " + numPlus);
      }
    }
    console.log('= ' + numPlus);
  },

  Unary: function (a){
    var x = a;
    console.log("x = "+ x);

    var y = --x;
    x = -y;
    console.log("y = --x = "+ y);
    console.log("x = -y = "+ x);

    var  z = +y;
    console.log("z = +y = "+ z);
  }
};
module.exports = mathMod;
