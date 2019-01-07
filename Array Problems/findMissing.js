// Find missing in array [1...100]

// Naive O(n)
// function findMissing(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === i+2) return arr[i]-1;
//     }
// }

// Binary Search O(log n)
function findMissing(arr) {
    var start = 0;
    var end = arr.length-1;

    while(start <= end) {
        var mid = Math.floor((start+end)/2);
        var prev = arr[mid-1];
        var curr = arr[mid];
        var next = arr[mid+1];

        var goLeft = curr === mid+2
        var goRight = curr === mid+1
        console.log({
            mid: mid,
            prev: prev,
            curr: curr,
            next: next,
            goLeft: goLeft,
            goRight: goRight,
        });
        
        // break conditions
        if(goLeft && prev === mid-2)
            return curr-1;
        if(goRight && next === mid+3)
            return curr+1;
        
        if(goLeft)
            end = mid-1;
        else if (goRight)
            start = mid + 1
    }
}


var result = findMissing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result);
