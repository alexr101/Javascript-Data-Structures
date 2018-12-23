// BUBBLE SORT ---------------------------------
const swap = (arr, i, j) => {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const sortBy = (arr, key) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-1; j++) {
            k = j+1;
            if(arr[j][key]>arr[k][key])
                swap(arr, j, i);
        }
    }
}
// --------------------------------------------
// Iterative Solution to 01 Knapsack
const maximumItems = (items, maxPrice) => {
    let matrix = [];
    let rows = items.length;
    let cols = maxPrice+1;

    // fill first column w zeroes because we can't select any items at this weight
    for(let i = 0; i < rows; i++) {
        matrix[i] = [];
        matrix[i][0] = 0;
    }

    // fill up the matrix
    for(let i = 0; i < rows; i++) {
        for(let j = 1; j < cols; j++) {
            const currentMax = j;
            
            const itemPrice = Math.ceil(items[i]['price'])
            const itemWeight = items[i]['points'];

            let weight = 0;
            if(items[i]['price'] <= currentMax)
                weight = itemWeight;
            if(matrix[i-1] && matrix[i-1][j-itemPrice])
                weight += matrix[i-1][j-itemPrice];

            let prevWeight = 0;
            if(matrix[i-1])
                prevWeight = matrix[i-1][j];

            matrix[i][j] = Math.max(weight, prevWeight);
            
        }
    }

    // find path to get items
    let selectedItems = [];
    let currentCol = cols-1;
    let currentRow = rows-1;
    
    while(currentRow >= 0) {
        // add item if item above doesn't match
        while(matrix[currentRow-1] && matrix[currentRow][currentCol] === matrix[currentRow-1][currentCol]) {
            currentRow--;
        }
        let points = items[currentRow]['points'];
        selectedItems.push(items[currentRow]);

        currentRow--;
        currentCol -= points;
    }

    return selectedItems;
}


const products = [
    { price: 3.99, points: 4 },
    { price: 7.99, points: 1 },
    { price: 1.99, points: 5 },
    { price: 6.99, points: 1 },
    { price: 9.99, points: 2 },
    { price: 0.99, points: 7 },
]
sortBy(products, 'price');
const selectedItems = maximumItems(products, 10);
console.log(selectedItems);



