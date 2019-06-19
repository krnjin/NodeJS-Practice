// Created Person constructor with firstname, lastname, and greet() method
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function(){
        console.log("This is a greet variable inside Person constructor");
    }
}

// re-declared greet prototype. HOWEVER, this does not overwrite the constructor variable inside of Person object.
Person.prototype.greet = function(){
    console.log("Now the prototype of greet variable is defaulted to the prototype")
}

// declaring age prototype
Person.prototype.age = function(n){
    this.age = n
    console.log(this.age)
}

// declaring greet1 prototype. NOW, you can use this function when declaring to ALL Person object
Person.prototype.greet1 = function(){
    console.log("Now the prototype of greet variable is defaulted to the prototype")
}

var jin = new Person("Jin", "Kwon")
var chae = new Person("Chae", "Kwon")

console.log(jin.firstName)
console.log(jin.lastName)
jin.greet();
jin.greet1();

// logging out all the prototypes of Jin object
console.log(jin.__proto__)

jin.age(10); // setting the age

console.log(jin); // writes out all the property of Person jin object
console.log(chae)

chae.age(100)

console.log(chae)