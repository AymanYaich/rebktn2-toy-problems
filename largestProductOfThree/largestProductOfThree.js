/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {

var arrayMax =[] ; //arrayMax is an array in which we add the three biggesr number
var result=1
if ( array.length<3){
    for ( var i = 0 ; i < array.length ; i++ ){
        result = result * array[i]
    }
} else {
    for ( var i = 0 ; i < array.length ; i++){
        for ( var j = i+1 ; j < array.length ; j++){
            if (array[i]<array[j] ){
                var inter= array[i];
                array[i]=array[j];
                array[j]=inter
            }

        }
    }
    for ( var i = 0 ; i < 3; i++){
        arrayMax.push(array[i])
    }

    for ( var j = 0 ; j < arrayMax.length ; j++){
        result = result * arrayMax[j]
    }
}

    return result;

}
