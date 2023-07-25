// With the bind() method, an object can borrow a method from another object.
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

// BIND VS APPLY VS CALL ----------------------------------------------------------------------------
/*
Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
*/

// PRESERVING THIS ----------------------------------------------------------------------------------
// When a function is used as a callback, this is lost.
const person2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

setTimeout(person2.display, 3000);

// The bind() method solves this problem.
// In the following example, the bind() method is used to bind person.display to person.
const person3 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

let display = person3.display.bind(person3);
setTimeout(display, 3000);