var array = [1, 2, 3, 32, 50, 234, 1230];

//O(log n)
function recursiveBinarySearch(arr, p, r, x){
	console.log("[ " + p + "..." + r + " ]");

	//if the beginnning of the array is more than "the end" then we're done here!
	if(p > r) return -1;

	//divide the amount of elements by 2 to calculate the mid-distance
	var q = (p+r)/2;

	//You found your result!
	if(arr[q] === x) return q;
	//Result on the left
	else if(arr[q] > x) return recursiveBinarySearch(arr, p, q-1, x);
	//Result on the right
	else return recursiveBinarySearch(arr, q+1, r, x);
}

console.log(recursiveBinarySearch(array, 0, array.length-1, 1230))