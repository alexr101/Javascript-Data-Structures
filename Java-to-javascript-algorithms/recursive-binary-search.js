var array = [1, 2, 3, 32, 50, 234, 1230];

function recursiveBinarySearch(arr, p, r, x){
	console.log("[ " + p + "..." + r + " ]");

	if(p > r) return -1;

	var q = (p+r)/2;

	if(arr[q] === x) return q;
	else if(arr[q] > x) return recursiveBinarySearch(arr, p, q-1, x);
	else return recursiveBinarySearch(arr, q+1, r, x);
}

console.log(recursiveBinarySearch(array, 0, array.length-1, 1230))