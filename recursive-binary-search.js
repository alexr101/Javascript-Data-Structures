function recursiveBinarySearch(arr, searchNum) {
	var mid = Math.floor(arr.length/2) - 1;
	var midNum = arr[mid];

	if(searchNum === midNum) return true;

	if(searchNum > midNum && arr.length > 1) {
		var splicedArr = arr.splice(midNum, arr.length)
		return recursiveBinarySearch(splicedArr, searchNum);
	} else if (searchNum < midNum && arr.length > 1)  {
		var splicedArr = arr.splice(0, midNum);
		return recursiveBinarySearch(splicedArr, searchNum);
	} else {
		return false; // arr length === 1 and no match
	}

}

var found = recursiveBinarySearch([1, 2, 3, 4, 5, 6], 8);

console.log(found);