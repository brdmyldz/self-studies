// JS OBJECTS ---------------------------------------------------------------------------------------------
/*
JavaScript objects are containers for named values called properties.
Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car:
*/
const car = {
    type:"Fiat",                        // property
    model:"500", 
    color:"white",
    description : function() {          // method
        return this.type + " " + this.model;
    }
};
// It is a common practice to declare objects with the const keyword.

// ACCESSING OBJECTS PROPERTIES ---------------------------------------------------------------------------
// You can access object properties in two ways:
objectName.propertyName;
// or
objectName["propertyName"];

// ACCESSING OBJECT METHODS -------------------------------------------------------------------------------
// You access an object method with the following syntax:
objectName.methodName();


