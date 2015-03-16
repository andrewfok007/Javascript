/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
  E.g.
  triangleType(2, 4, 6); // return 0 (Not triangle)
  triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
  triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
  triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/

function triangleType(a, b, c){
  var myarr = [a, b, c];
  myarr.sort(function (a, b) {return b - a;});
  
  //check if it is a triangle
  if (a+b>c && a+c>b && b+c>a) { //check if it is a triangle
  
    h = Math.sqrt(myarr[0]*myarr[0] - myarr[1]*myarr[1]).toPrecision(12); //pythagoras
    
    console.log(h);
    console.log(myarr)
    
    if (h > myarr[2]){  //check if it is Obtuse
      return 3;
    }
    
    if (h < myarr[2]){  //check if it is acute
      return 1;
    }
    
    if (h == myarr[2]){ //check if it is right
      return 2;
    }
    
  } else {
  
  return 0; //if it is not a triangle
  
  }
}