//MAIN FILE

//importing a module in js
var greet = require('./greet');
var {firstFunction, secondFunction} = require('./moduleTest');


(function (example, number){
    console.log("this is an example of immediate invoked function");
    console.log(example);
    console.log(number);
}("something", 5));

// invoking multiple variables from one module
greet.greet();
greet.something();

firstFunction();
secondFunction();
