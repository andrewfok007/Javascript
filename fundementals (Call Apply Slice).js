// <!DOCTYPE html>
// <html>
// <body onload="myFunction()">

// <h1 id="">Hello World!</h1>

// <script type="text/javascript"> 

// Array
// this is the name of the base object that we want prototype
// this can be thought of as the namespace for the instance methods of an array

// slice
// this extracts a section of an array and returns a new array, 
//and without a beginning and ending index, it simply returns a copy of the array

// Call & Apply
// this is a very useful function, it allows you to call a function from one object 
// and use it in the context of another
function myFunction(a, b) {
    return a * b;
}
myFunction.call(myObject, 10, 2);      // Will return 20
myArray = [30,2];
myFunction.apply(myObject, myArray);   // Will also return 60



//Slice & call
var testFunction = function() {
  // Create a new array from the contents of arguments
  //Array is an object, with its own method
  var args = Array.prototype.slice.call(arguments, 1);

  document.write(" First ", args);
  var a = args.shift();
  document.write(" Second ", args);
  var a = args.shift();
  document.write(" Third ", args);
};

testFunction(1,2,3,4) //First 2,3,4 Second 3,4 Third 4

// </script>



// </body>
// </html>