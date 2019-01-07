// Quick Sort

// gonna need to
// 1) Create two empty arrays, one left and right
// 2) Get half of array index 
// 3) Get loop through the array
// 4) If the value is less than half-index num push to left arr
// 5) If the value is more than half-index num push to right arr
// 6) Call quick sort on both right and left arr
// 7) To break recursion break the loop if arr length is 1
// 8) At the end of the function return the concatenation of left array + right array
// 
// FAIL this solution fails because by sorting before you split them you can end up with an infinited loop
// if all your values end up being greater or less than the half-index number. You keep getting the 
// same right or left branch array over and over.

// Second Attempt
// 
// 1) Create two empty arrays 
// 2) Get half index of array, store it
// 3) Place all elements left of the index on left array, exclude half-index
// 4) Place all elements right of the index on right array, exclude half-index
// 5) call mergesort on both arrays
// 6) concatenate and return leftarr + half-index + rightarr
// 
// 
// 
var arr = [3, 2, 5, 53, 1, 6, 745, 234, 2, 5, 7, 9, 986, 2, 123, 15, 15, 3, 2, 5, 3, 2];

function quickSort(arr){
	
	if(arr.length <= 1) return arr;

	var rightArr = [];
	var leftArr = [];
	var half = Math.floor(arr.length/2)
	var halfElement = arr[half];

	for(var i = 0; i < arr.length; i++){

		if(i === half) continue;
		var el = arr[i];

		if(el <= halfElement)
			leftArr.push(el);
		else if(el > halfElement)
			rightArr.push(el);
	}

	leftArr = quickSort(leftArr);
	rightArr = quickSort(rightArr);

	return leftArr.concat(halfElement, rightArr);
}

console.log(quickSort(arr));

function quickSort(arr){
	if(arr.length <= 1) return arr;

	var rightArr = []
	var leftArr = [];
	var half = Math.floor(arr.length/2);
	var halfEl = arr[half];

	for(var i = 0; i < arr.length; i++){
		if(i === half) continue;

		if(arr[i] < halfEl)
			leftArr.push(arr[i]);
		else if (arr[i] > halfEl)
			rightArr.push(arr[i]);
	}

	rightArr = mergeSort(rightArr);
	leftArr = mergeSort(leftArr);

	return leftArr.concat(halfElement, rightArr);

}