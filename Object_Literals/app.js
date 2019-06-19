// Creating person objects with name:value pairs
var person = {
    firstName: "Jin",
    lastName: "Kwon",
    greet: function() {
        console.log("this is greet function");
    }
}

// logs out firstName value of the person object
console.log(person['firstName'])

// does not log out the body of the function
console.log(person['greet'])

// this is how you invoke a function inside of a person obejct
person.greet();