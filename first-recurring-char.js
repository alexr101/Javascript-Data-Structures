// Uses a simple hashmap and checks if property exists to determine recurrence
// https://repl.it/repls/LawngreenAdequateSort
var arr1 = ['a', 'b', 'c', 'a'];
var arr2 = ['b', 'a', 'b', 'a'];
var arr3 = ['a', 'b', 'c'];
var arr4 = ['a', 'b', 'c', 'd', 'e', 'f', 'c'];

function firstRecurringChar(arr) {
  var map = [];
  
  for(var i = 0; i < arr.length; i++) {
    if(map[arr[i]]) return arr[i];
    map[arr[i]] = 1;
  }
  return null;
}

console.log( firstRecurringChar(arr4) );
