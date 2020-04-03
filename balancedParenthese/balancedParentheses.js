/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {


    
    let sumOne = 0;
    let sumTwo = 0;

    for ( value in str){
        if (value=== "("){
            sumOne++
        } else if (value===")"){
            sumTwo ++
        }
    }
      if (sumOne === sumTwo){
          return true
      }
      return false

};
