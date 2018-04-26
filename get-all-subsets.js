// get all subsets
// this solution fails because hashmap only checks string value...so [1, 2] is NOT the same [2, 1]
// https://repl.it/@AlexPadilla/NextMediocreDatawarehouse

var arr1 = [1, 2, 3, 4];

function getAllSubsets(arr){
  var result = [];
  var hashmap = []
  
  hashmap[[]] = 1;
  result.push([]);
  
  for(var i = 0; i < arr.length; i++) {
    var currentArr = [];
    var currentNum = arr[i];
    currentArr.push(currentNum);
    
    hashmap[currentArr] = 1;
    result.push(currentArr.slice());
    
    for(var j = 0; j < arr.length; j++) {
      var secondNum = arr[j];
      if(currentNum == secondNum) continue;
      currentArr.push(secondNum)
      if(hashmap[currentArr]) continue;
      hashmap[currentArr] = 1;
      result.push(currentArr.slice());
    }  
  }
    
  return result;
}

getAllSubsets(arr1);