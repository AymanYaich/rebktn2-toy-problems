/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
Array.prototype.isSubsetOf = function (arr) {
    // your code here 

    var arrayNonRepeat=Array[0]; // this array will recieve the non repeated elements of the input array
     var k=0;
     var h=0;
    for ( var i = 0 ; i < Array.length ; i ++ ) {

        for ( var j = i+1 ; j< Array.length ; j++){
            if ( !arrayNonRepeat.includes[Array[j]]){
                arrayNonRepeat[k]= Array[j]
                k=k+1
            }
            

        }
    }
    for ( var d=0 ; d<arrayNonRepeat.length; d++){
        for ( var l=0 ; l< arr.length ; i++){
            if (arrayNonRepeat[d]=arr[l]){
                h=h+1
            }

        }
        
        }
        if ( h>=k){
            return true
        }
        return false
        
    }
    
