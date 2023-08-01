// JS FOR...IN LOOP ---------------------------------------------------------------------------------------
// The JavaScript for...in statement loops through the properties of an object.
for (let variable in object) {
    // code to be executed
}


// DELETING PROPERTIES ------------------------------------------------------------------------------------
// The delete keyword deletes a property from an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;