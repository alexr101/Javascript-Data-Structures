// Naive O(n2)

function findPairsMatchingSum(arr, sum) {
    var matchingPairs = [];
    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            var num1 = arr[i];
            var num2 = arr[j];
            if(num1 + num2 === sum)
                matchingPairs.push([num1, num2]);

        }
    }

    return matchingPairs;
}

// Better O(n)
// Space is O(n)
// 6
// 2
// function findPairsMatchingSum(arr, sum) {
//     var matchingPairs = [];
//     var hashTable = {
//         '4': 4
//     }
    
//     for(var i = 0; i < arr.length; i++) {
//         var remainder = sum-arr[i];

//         if(hashTable[remainder]) 
//             matchingPairs.push([arr[i], hashTable[remainder]]);
//         else
//             hashTable[arr[i]] = arr[i];
//     }

//     return matchingPairs;
// }

// O(n log n) n for initial sorting
// No extra space
function findPairsMatchingSum(arr, k) {
    // SORT ARR HERE

    var matchingPairs = [];
    var left = 0;
    var right = arr.length-1;

    while(left < right) {
        var sum = arr[left] + arr[right];

        if(sum === k) {
            matchingPairs.push([ arr[left], arr[right] ]);
            left++;
            right--;
        } else if( sum > k) {
            right--;
        } else if (sum < k) {
            left++;
        }
    }

    return matchingPairs;
}

var res = findPairsMatchingSum([1, 2, 3, 4, 5, 6], 8);
// [2, 6]
// [3, 5]

console.log(res);

1 - 2 = -1
x - y = k
x = -1 + 2
x = k + y