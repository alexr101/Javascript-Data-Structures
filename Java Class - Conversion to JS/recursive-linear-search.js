var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function recursiveLinearSearch(arr, index, val){

	if(index > arr.length) return -1;

	else if(arr[index] === val) return val;

	else return recursiveLinearSearch(arr, index+1, val);
}

console.log(recursiveLinearSearch(array, 0, 5));