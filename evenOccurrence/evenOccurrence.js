/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOoccurence = function (array){
  
    var obj ={}
    var arrEven=[]

    for ( var i = 0 ; i< array .length ; i++){
        
        if (array.includes(array[i])) {
            obj[array[i]]=0
            
        }

    }
    for ( var j=0 ; j<array.length ; j++){
        if ( array.includes(array[j])){
            obj[array[j]]++
            
        }
    }
        for ( var key in obj){
            if (obj[key]%2===0){
                arrEven.push(key)
            }
            
        }
        if (arrEven.length ===0){
            return null
        }
        return arrEven[0]
    }

    // Just I need to fix the edge case of if one element is an object , I will fix it , because I started my ToyPb late


