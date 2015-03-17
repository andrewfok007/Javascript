// let's create an alien object
var alien = {
  kind: 'alien'
}
// and a person object
var person = {
  kind: 'person'
}
// and an object called 'zack'
var zack = {};
// assign alien as the prototype of zack
zack.__proto__ = alien
// zack is now linked to alien
// it 'inherits' the properties of alien
console.log(zack.kind); //=> ‘alien’
console.log(alien.isPrototypeOf(zack))// true
// assign person as the prototype of zack
zack.__proto__ = person
// and now zack is linked to person
console.log(zack.kind); //=> ‘person’
var person = {
  kind: 'person'
}


//New / updated properties are assigned to the object, not to the prototype
var zack = {}
zack.__proto__ = person
zack.kind = 'zack'
console.log(zack.kind); //=> 'zack'
// zack now has a 'kind' property
console.log(person.kind); //=> 'person'
// person has not being modified


//Object.create is same as object.__proto__
var person = {
  kind: 'person'
}
// creates a new object which prototype is person
var zack = Object.create(person);  
console.log(zack.kind); // => ‘person’
//You can pass an object to Object.create to add specific properties for the new object
var zack = Object.create(person, {age: {value:  13} });
console.log(zack.age); // => ‘13’