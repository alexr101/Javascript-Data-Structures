// IS ARRAY
var str = 'str'
var arr = []

var isArr1 = Array.isArray(str)
var isArr2 = Array.isArray(arr)
console.log(isArr1);
console.log(isArr2);


// Simple length loop
var sum = 0;
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

for(var i = 0; i < arr.length; -i++) {
    sum += arr[i];
}
console.log(sum);

// IndexOf

arr = [1, 2, 3, 4, 3, 4, 5, 6, 3]
// second param is starting pos
var index = arr.indexOf(3, 4)
console.log(index);

// Last IndexOf
var lastIndex = arr.lastIndexOf(3)
console.log(lastIndex);



