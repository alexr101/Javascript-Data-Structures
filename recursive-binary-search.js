function recursiveBinarySearch(arr, searchNum) {
	var mid = Math.floor(arr.length/2);
	var midNum = arr[mid];

	if(searchNum === midNum) return true;

	else if(searchNum > midNum && arr.length > 1) 
		return recursiveBinarySearch(arr.splice(mid, arr.length), searchNum);
	else if (searchNum < midNum && arr.length > 1)
		return recursiveBinarySearch(arr.splice(0, mid), searchNum);
	else 
		return false; // arr length === 1 and no match
}

var found = recursiveBinarySearch([18, 22, 31, 44, 53, 61], 18);
console.log(found);