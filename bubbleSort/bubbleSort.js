/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  var bubbleSort = function(array) {
    var arrNotNumber =[];
    var arrNumber=[];
    var arrAll=[];
  
    for ( var i = 0 ; i< array.length ; i++){ //Edge case to put all the non numeric values in an array
      if (typeof(array[i])!=="number"){
        arrNotNumber.push(array[i])
      }
    }
    for ( var j=0 ; j<array.length ; j++ ){  //All numeric values are pushed into a new array in order to sort it using Bubble algorithm
      if (typeof(array[j])==="number"){
        arrNumber.push(array[j])
      }
    }
  
    for (var k=0 ;k<arrNumber.length ; k++){
      for (var h = 0 ; h<arrNumber.length ; h++){
        if (arrNumber[k]<arrNumber[h]){
          var permut = arrNumber[k];
          arrNumber[k]=arrNumber[h];
          arrNumber[h]=permut
        }
      }
    }
    arrAll=arrNumber.concat(arrNotNumber)
    return arrAll;
  
    
  };
  
};
