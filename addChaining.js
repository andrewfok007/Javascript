function add(n){
  var fn = function(x) { //fn is now a function object
    return add(n + x); 
  };
  fn.valueOf = function() { //fn function onject has a value to return when called on.
    return n;
  };
  return fn;
}

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// Neat