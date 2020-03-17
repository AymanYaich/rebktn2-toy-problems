/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var arrNonrepeat=[];
  var arr=[]
  for ( var j = 0 ; j<string.length ; j++){
    if(!arrNonrepeat.includes(string[j].toLowerCase())){
      arrNonrepeat.push(string[j])

    }
  }
    for ( var i = 0; i<arrNonrepeat.length ; i++){
      for ( var k =0 ; k<string.length; j++){
        var z=0;
        if (arrNonrepeat[i].toLowerCase()===string[k].toLowerCase()){
          z++
     }
        } if (z===1){
          arr.push(arrNonrepeat[i])
          }
    }
    return arr[0]

  
};

