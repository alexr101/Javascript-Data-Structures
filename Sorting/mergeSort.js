const merge = (a, i, j) => {
    if(i === j) return [a[i]];
    const mid = Math.floor((i+j)/2);
    const left = merge(a, i, mid);
    const right = merge(a, mid+1, j);
    return sort(left, right)
}


// This sorting algorightm uses moving indices to save the a1.shift() O(n) operation
const sort = (a1, a2) => {
    let sortedArr = [];
    let i = 0;
    let j = 0;;

    while(i < a1.length || j < a2.length) {
        if(i === a1.length) {
            sortedArr.push(a2[j])
            j++;
        } else if (j === a2.length) {
            sortedArr.push(a1[i])
            i++;
        }else if(a1[i] <= a2[j]) {
            sortedArr.push(a1[i]);
            i++;
        } else if(a1[i] > a2[j]) {
            sortedArr.push(a2[j]);
            j++;
        }
    }
    return sortedArr;
}

const arr = [1,6,89,24,857,63279,2578,13,34,3,3,1,345]
const sortedArr = merge(arr, 0, arr.length-1);
console.log(sortedArr);


