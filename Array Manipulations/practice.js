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

class ArrUtil{
    arrayOfNth(n) {
        var arr = []
                
        for(var i = 0; i < n; i++){
            
            arr.push('key_' + i);
        }
        
        return arr
    }


    everyNth(arr, n) {
        return arr.filter(function(i){
            return i%n === 0;
        })
    }

}
// Create an array of N size and populate them with unique values of the same prefix
// function array_of_nth(n) {

// }

var arrUtil = new ArrUtil()
arrOfNth = arrUtil.arrayOfNth(8);
console.log(arrOfNth);


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const everyNthArr = arrUtil.everyNth(arr, 2)
console.log(everyNthArr);

// concat
var concat = [1].concat([2]);
console.log(concat);

// copy within
var copyWithin = [1, 2, 3, 4, 5].copyWithin(0, 3, 5);
console.log(copyWithin);
copyWithin.copyWithin(0, 1)
console.log(copyWithin);

// USELESS
// same as map
var every = [1, 2, 3, 4].every(function(i){
    return i === 1
})
console.log(every);

// Not Nodejs compatible yet?
// var flat = [1, [2, 3, [4, 5, 6], 6, 7], [1, 2, 3]].flat();
// console.log(flat);

var reduced = [1, 2, 3, 4, 5].reduce((accumulator, current) => {
    return accumulator + current;
})
console.log(reduced);












