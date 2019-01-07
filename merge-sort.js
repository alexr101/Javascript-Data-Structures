function mergeSort(arr) {

	if(arr.length < 2) return arr;

	var mid = Math.floor(arr.length/2);

	var leftArr = mergeSort(arr.slice(0, mid));
	var rightArr = mergeSort(arr.slice(mid));

	return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
	var sortedArr = [];

	while(leftArr.length && rightArr.length) {

		if(leftArr[0] < rightArr[0]) 
			sortedArr.push(leftArr.shift());
		else 
			sortedArr.push(rightArr.shift());
	}

	if(leftArr.length) {
		sortedArr = sortedArr.concat(leftArr);
	}
	else if(rightArr.length) {
		sortedArr = sortedArr.concat(rightArr);
	}
	return sortedArr;
}


var sortedArr = mergeSort([3, 4, 14, 30, 35, 51,  52]);
console.log(sortedArr);