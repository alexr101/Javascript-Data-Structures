// MORE EFFICIENT

function minimumSwaps(arr) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) continue;
        swap(arr, i, arr[i] - 1); // put current in its correct position
        swaps++;
        // we have to double check this index again, because we don't know 
        // what number we brought here
        i--; 
    }
    return swaps;
}

// MY ORIGINAL SOLUTION
// A BIT CONVOLUTED BUT DID NOT SEARCH FOR HELP
// DERIVED FROM HOW THE TEST CASES WERE BUILT
function minimumSwaps1(arr) {
    let minSwaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 === i) continue;

        // A bit convoluted but it works.
        // if 2 3 1
        // find = 1
        // find2 = 3 because 3 goes in 1s current place
        // because we have to finds we swap(2, 3) & swap(3, 1)
        // if find2 is a[i] just swap(a[i], 1);
        let find = i + 1;
        let index = arr.indexOf(find);
        let find2 = index + 1;
        let index2;

        if (arr[i] !== find2) {
            index2 = arr.indexOf(find2);
            swap(arr, i, index2);
            minSwaps++
        }
        swap(arr, i, index);
        minSwaps++;    
        
    }
    return minSwaps;
}
