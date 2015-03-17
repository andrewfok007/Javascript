//Functions as constructors - also classified as objects
function Foo() {
  this.kind = ‘foo’
}
foo.kind //=> ‘foo’
var foo = new Foo();
//foo is now an instance of Foo
console.log(foo instanceof Foo ) // true
foo.kind // ‘foo’


//Every function in JavaScript has a special property called ‘prototype’.
function Person(name) {
  this.name = name;
}
Foo.__proto__ === Foo.prototype //=> false
// the function person has a prototype property
// we can add properties to this function prototype
Person.prototype.kind = ‘person’;
// when we create a new object using new
var zack = new Person(‘Zack’);
// the prototype of the new object points to person.prototype
zack.__proto__ == Person.prototype //=> true
// in the new object we have access to properties defined in Person.prototype
zack.kind //=> person