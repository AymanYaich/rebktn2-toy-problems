/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (number
) {

  var number = number || 3
  var array = [];
  var word =""
  var k =1;
  for ( var i = 1 ; i< number ; i++ ){

    word = word+"R"

  }

  for ( var j = 1 ; j<= number ; j++ ){
    
     if ( k >3){
       k=1

     }
      if ( k === 1){
        newword = word+"R"
        
      } else if ( k ===2){
        newword = word + "P"
        
      } else {
        newword = word +"S"
        
      }

     array.push ( newword )
     k++
  }
  
  return array


};
