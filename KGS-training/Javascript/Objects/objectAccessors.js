/*
Why Using Getters and Setters?
    It gives simpler syntax
    It allows equal syntax for properties and methods
    It can secure better data quality
    It is useful for doing things behind-the-scenes
*/

// JS GETTER ----------------------------------------------------------------------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;

// JS SETTER ----------------------------------------------------------------------------------------------
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

// Set an object property using a setter:
person2.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person2.language;