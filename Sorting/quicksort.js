// Quicksort revolves around a pivot

const quicksort = (arr, l, h) => {
    if(l < h) {
        const j = partition(arr, l, h);
        quicksort(arr, l, j);
        quicksort(arr, j+1, h);
    }
}
const partition = (arr, l, h) => {
    const pivot = arr[l];
    let i = l;
    let j = h;
    while(i < j) {
        while(arr[i] <= pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i < j) swap(arr, i, j);
    }
    swap(arr, l, j);

    return j;
}

const swap = (a, i, j) => {
    temp = a[i]
    a[i] = a[j];
    a[j] = temp;
}

let arr = [4,53,46,57,8,67,3,45,2,35,74]
quicksort(arr, 0, arr.length-1);
console.log(arr);

