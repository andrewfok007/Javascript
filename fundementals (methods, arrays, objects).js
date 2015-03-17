//meaning of 'this'
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this;
    }
}

//The thing called 'this', is the object that "owns" the JavaScript code. 
//In this case the value of 'this' is myObject.
myObject.fullName(); // Will return [object Object] (the owner object)
var NewObject = myObject.fullName()
NewObject.lastName = "Chan"
NewObject.lastName //return Chan


// Invoking a Function with a Function Constructor
function myFunction(arg1, arg2) { // This is a function constructor:
    this.firstName = arg1;
    this.lastName  = arg2;
}
var x = new myFunction("John","Doe");// This	creates a new object
x.firstName;  


//Invoking a Function with a Function Method
function myFunction(a, b) {
    return a * b;
}
myFunction.call(myObject, 10, 2);      // Will return 20
myArray = [30,2];
myFunction.apply(myObject, myArray);   // Will also return 60

// Difference between arrays and objects - how come 'typeof array' return as an object?
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
// You can have objects in an Array. 
// You can have functions in an Array. You can have arrays in an Array:

var person = {firstName:"John", lastName:"Doe", age:46};
person["firstName"] //John
person.firstName //John

//To recognize an array from objects
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}//return true if the argument is an array

//Comparing objects
// Two variables, two distict objects with the same properties
var fruit = {name: "apple"};
var fruitbear = {name: "apple"};
fruit == fruitbear // return false
fruit === fruitbear // return false

// Two variables, a single object
var fruit = {name: "apple"};
var fruitbear = fruit;  // assign fruit object reference to fruitbear
// here fruit and fruitbear are pointing to same object
fruit == fruitbear // return true
fruit === fruitbear // return true