// get all subsets
// this solution fails because hashmap only checks string value...so [1, 2] is NOT the same [2, 1]
// https://repl.it/@AlexPadilla/NextMediocreDatawarehouse
// great explanation: https://www.youtube.com/watch?v=bGC2fNALbNU

// This recursive function iterates through the array, and returns values if arr.length === i
// Top function will keep current i as null
// Bottom function will map current i with array

function getAllSubsets(arr){
    var subset = new Array(arr.length);
    subsetHelper(arr, subset, 0);
}

function subsetHelper(arr, subset, i) {
    if(i === arr.length) 
        return printNonNull(subset);
    subset[i] = null;
    subsetHelper(arr, subset, i+1);
    subset[i] = arr[i];
    subsetHelper(arr, subset, i+1);
};

function printNonNull(arr){
  var newArr = arr.filter(function(num) {
    if(num!=null) return num; 
  })
  console.log(newArr);
}

var arr1 = [1, 2];
getAllSubsets(arr1);

