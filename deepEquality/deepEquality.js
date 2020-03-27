/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  
  var arrApple = []
  var arrOrange =[]

  for ( var key in apple){
    arrApple.push(key)
    arrApple.push(apple[key])
  }
  for ( var key in orange) {
    arrOrange.push(key)
    arrOrange.push(orange[key])
  }
   
  if (arrApple.length !== arrOrange.length){
    return false
  } 
    else {
    for (var i = 0 ; i< arrApple.length ; i++){
      if (arrApple[i] !== arrOrange[i]){
        return false
      }
    }
      return true
  

  }
};
