//MAIN FILE

//importing a module in js
var greet = require('./greet');
var {firstFunction, secondFunction} = require('./moduleTest');

// invoking multiple variables from one module
greet.greet();
greet.something();

firstFunction();
secondFunction();
