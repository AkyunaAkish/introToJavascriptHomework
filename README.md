
# Intro to Javascript homework

## Objectives
* Learn how to create and run a .js file using your text editor and the terminal

* Put your understanding of Javascript vocabulary to use by assigning values to variables and by using expressions

## Directions
* Fork and clone this repo to your local machine ( in that order )

* cd into your cloned directory and then create an app.js file

* Before you write any code yourself, open your directory in your text editor and then copy this snippet of code and paste it into your app.js file:

```
var a = 22;
var b = 10;
var c = a + b;

console.log(c);
```
* Then go back to your directory in the terminal and run this command:

```
node app.js
```

* Notice how console.log(c); allows you to log of the value of the variable in the terminal by allowing node to execute your code

* Now that you get the basics of how to execute code with node and see an output in the terminal, use javascript mathematical expressions to assign values to variables using all of the operators in this documentation except for "Exponentiation (\**)" [MDN Javascript mathematical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

* An example of this is :

```
var example = 2 + 2;
console.log(example);
```

* After you create a new variable and add your console.log(); statement, run the app.js file with node and see the output.
Run your app.js with node every time you add a new variable/console.log pair.
When you see the output, take mental note of what the mathematical operator did, and then add a comment in your app.js file above the statement you are describing.

Example:

```
// The mathematical operator '+' is how javascript adds two values together
var example = 2 + 2;
console.log(example);
```

* Go through that same process for all of the mathematical javascript operators (again, except for Exponentiation (\**)) Until you have a comment, variable, and a console.log(); for each of the javascript mathematical operators.

* If you want to get more comfortable with git, after every comment, variable, and console.log(); combination you create, you can add and commit your changes with descriptive commit messages explaining what you did at every step.

* After you finish that, git add, git commit, git push. Then (from your fork of this repo on github.com) send a pull request.


# STRETCH GOAL

* If you finished the previous mathematical operators and still want more, do the same process as before using these mathematical javascript methods:

 * [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

 * [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

 * [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

 * [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

 * [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

 * [Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

* EXAMPLE:

```
//Math.pow(a,b) in javascript returns a to the power of b (in this case 2 to the power of 2)
var a = Math.pow(2, 2);
console.log(a);
```
