const swap = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const weaves = (a1, a2) => {
    let weaves = [];
    const combinedLength = a1.length + a2.length;
    let i = a1.length-1;
    let prevArr = a1.concat(a2);
    let rightBorder = combinedLength-1;
    weaves.push([...prevArr]);
    while(i > 0) {
        j = i;
        while(j < rightBorder) {
            swap(prevArr, j, j+1);
            const weavedArr = [...prevArr];
            weaves.push(weavedArr);
            j++;
        }
        rightBorder--;
        i--;
    }

    return weaves;
}
const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7];
const weavedArrays = weaves(a1, a2);
console.log(weavedArrays);
