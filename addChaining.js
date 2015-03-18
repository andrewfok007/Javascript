function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  fn.valueOf = function() {
    return n;
  };
  return fn;
}

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// Neat