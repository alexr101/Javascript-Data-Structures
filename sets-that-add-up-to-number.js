// https://www.youtube.com/watch?v=nqlNzOcnCfs
// [2, 3, 5]
// if num = 5 
// return [2, 3] & [5]
// if num = 0
// return []
// No negatives and no repeating numbers

// Use a recursive tree helper function to find all subsets and then
// filter them

function findSubsetsThatAddTo(arr, num) {
    if(num === 0) return [];
    subset = new Array(arr.length)
    var allSubsets = subsetHelper(arr, subset, 0, num);
  }
  
  function subsetHelper(arr, subset, i, num) {
    if(i === subset.length) {
      var val = subset.reduce(function(acc, val){ return acc + val; });
      if (val === num) printSubset( subset );
      return;
    }
    subset[i] = null;
    subsetHelper(arr, subset, i+1, num);
    subset[i] = arr[i];
    subsetHelper(arr, subset, i+1, num);
  }
  
  function printSubset(subset) {
    var arr = subset.filter(function(val){
      if(val != null) return val;
    });
    console.log(arr);
  }
  
  var arr = [1, 2, 3, 4, 7, 9, 11,  12, 54]
  findSubsetsThatAddTo(arr, 25);
  
  //               [ ]
  //           [ ]
  //       [ ]     [4]
  //               [3]    
  //           [3]
  //               [3,4]
  //    [ ]
  //               [2]
  //           [2]
  //       [2]     [2,4]
  //               [2,3]
  //           [2,3]
  //               [2,3,4]
  //               [1]
  //           [1] 
  //               [1,4]
  // [ ]   [1]     [1,3]
  //           [1,3]
  //               [1,3,4]
  //    [1]        [1,2]
  //           [1,2]
  //               [1,2,4]
  //       [1,2]
  //               [1,2,3]
  //           [1,2,3]
  //               [1,2,3,4]