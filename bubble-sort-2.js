
// log(n^2)
function bubbleSort(arr) {

	for(var i = arr.length-1; i > 0; i--) {

		for(var j = 0; j < i; j++) {
			var left = arr[j];
			var right = arr[j + 1];
			
			if(left > right) {
				arr[j] = right;
				arr[j + 1] = left;
			}
		}
	}

	return arr;
}


var arr = [3, 5, 2, 1, 62, 6, 4];

var sortedArr = bubbleSort(arr);

console.log(sortedArr);


