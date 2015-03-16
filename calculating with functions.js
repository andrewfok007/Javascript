// Description:
// Write calculations using functions and get the results. 

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//My first solution
//'Currying' is used in plus, minus, times and divide functions
//The numbers check if there is a function passed as arguement, if not return the number as integer

function zero()  {if(typeof arguments[0] === 'undefined'){return 0} else {return arguments[0](0)}}
function one()   {if(typeof arguments[0] === 'undefined'){return 1} else {return arguments[0](1)}}
function two()   {if(typeof arguments[0] === 'undefined'){return 2} else {return arguments[0](2)}}
function three() {if(typeof arguments[0] === 'undefined'){return 3} else {return arguments[0](3)}}
function four()  {if(typeof arguments[0] === 'undefined'){return 4} else {return arguments[0](4)}}
function five()  {if(typeof arguments[0] === 'undefined'){return 5} else {return arguments[0](5)}}
function six()   {if(typeof arguments[0] === 'undefined'){return 6} else {return arguments[0](6)}}
function seven() {if(typeof arguments[0] === 'undefined'){return 7} else {return arguments[0](7)}}
function eight() {if(typeof arguments[0] === 'undefined'){return 8} else {return arguments[0](8)}}
function nine()  {if(typeof arguments[0] === 'undefined'){return 9} else {return arguments[0](9)}}

function plus() {var a = arguments[0];return function(b){return b+a;};}
function minus(){var a = arguments[0];return function(b){return b-a;};}
function times(){var a = arguments[0];return function(b){return b*a};}
function dividedBy(){var a = arguments[0];return function(b){return b/a};}

//Better solution
// ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// .forEach(function (name, n) {
//   this[name] = function (f) { return f ? f(n) : n }
// });

// function plus(n)      { return function (a) { return a + n } }
// function minus(n)     { return function (a) { return a - n } }
// function times(n)     { return function (a) { return a * n } }
// function dividedBy(n) { return function (a) { return a / n } }