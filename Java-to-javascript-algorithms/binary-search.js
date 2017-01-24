var array = [1, 2, 3, 32, 50, 234, 1230];

//O(log n)

function binarySearch(arr, x){

	var p = 0;
	var r = arr.length-1;

	console.log("iteration");

	while(p <= r){
		var q = Math.floor((p+r)/2);
		if(x < array[q]) r = q-1;
		else if(x > array[q]) p = q+1;
		else return q;
	}

	return -1;
}

console.log(binarySearch(array, 2));