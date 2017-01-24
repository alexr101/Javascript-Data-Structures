var array = [8, 4, 3, 1, 7];

function mergeSort(arr){

	if(arr.length < 2) return arr;

	var middle = Math.floor(arr.length/2)
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);

	return(merge(mergeSort(left), mergeSort(right)));
}

//left and right are arrays
function merge(left, right){
	var result = [];

	while(left.length && right.length){
		if(left[0] >= right[0]) result.push(right.shift());
		else result.push(left.shift());
	}

	//if there's only one side left then go through these
	while(left.length){
		result.push(left.shift());
	}

	while(right.length){
		result.push(right.shift());
	}

	return result;
}



console.log(mergeSort(array));