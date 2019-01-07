// Naive O(n)
// Best solution unless all numbers in array are consecutive 
function findDuplicate(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) return[arr[i]]
    }
}

var res = findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 8, 9]);
console.log(res);