// speed: O(n)
// space: O(1)
function findMaxAndMin(arr) {
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    return {
        min: min,
        max: max
    }
}

var res = findMaxAndMin([5, 4, 23, 4, 234, 5234, 645, 63, 4, 1, 342, 346, 34, 9, 0, 8, 7, 3]);
console.log(res);

