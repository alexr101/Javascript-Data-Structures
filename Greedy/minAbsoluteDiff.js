// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	arr.sort();

	for(let i = 0; i < arr.length-1; i++) {
			min = Math.min(Math.abs(arr[i]-arr[i+1]), min);
			if(min === 0) return min;
	}

	return min;
}