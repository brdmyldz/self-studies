/*
In JavaScript all functions are object methods.
If a function is not a method of a JavaScript object, it is a function of the global object 
*/

// CALL() METHOD ------------------------------------------------------------------------------------
/*
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
*/

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


// CALL() METGOD WITH ARGUMENTS ---------------------------------------------------------------------
const personNew = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person2 = {
    firstName:"John",
    lastName: "Doe"
}

personNew.fullName.call(person2, "Oslo", "Norway");