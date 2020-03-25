/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    
        var count = 0
     
    if (array[0]>target ){
        return null
       }  else if (array[0]===target){
           return count
       } else {
           count ++
           array.shift()
           
           
       return binarySearch(array,target)
    } 
      
   
  }



