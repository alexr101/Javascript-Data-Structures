var arr = [45, 3, 9, 7, 4, 462, 364, 8, 94];

function insertionSort(arr){
	var output = [];

	for(var b = 1; b < arr.length; b++){
		var counter = 0;

		for(var a = b-1; a >= 0; a--){
			var numRight = arr[b - counter];
			var numLeft = arr[a];

			if(numRight < numLeft){
				arr[b-counter] = numLeft;
				arr[a] = numRight;
			}

			counter++;
		}
	}

	return arr;
		
}

// console.log(insertionSort(arr));