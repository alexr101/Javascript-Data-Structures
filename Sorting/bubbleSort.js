const swap = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


const bubbleSort = (a) => {
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length-1; j++) {
            k = j+1;
            if(a[j] > a[k]) swap(a, j, k);
        }
    }    
}

const arr = [4567,342,562,467,2,5,612,45,724,561,3,5462,457];
const sortedArr = bubbleSort(arr);
console.log(arr)