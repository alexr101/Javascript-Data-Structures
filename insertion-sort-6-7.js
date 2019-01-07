var arr = [45, 3, 9, 7, 4, 462, 364, 8, 94];




// Insertion Sort. How it works in my own words:
// 
// The insertion sort method iterates from left to right. It indexes a number and compares it
// to the value on its left. If its smaller than the left number the it will swap them. 
// It will now compare the same number in its new position to the number that is now on its left, and repeat the swap
// process if the left number is smaller. It will repeat this process until the original number either has no swap or it reaches 
// index 0

// My attempt at explaining my logic:
// 
// Right off the bat I know have to loop through so we can index each number that needs to be compared to the values
// to its left. After this an inner for loop that started at an index value of one less than its outer loop made sense. 
// This inner index value would decrease on each iteration. Therefore following the insertion sort pattern

// The challenge was updating the index value of the right number. In order to do this I added a counter that is equal to 0 on the outer loop
// that would increment on each iteration of the inner loop. This counter is used to decrease the index of the outer loop by one on each iteration.
// This also satisfies the insertionSort pattern in that the right index number moves to the left with each iteration.

// After this it's just a matter of swapping numbers if the number comparison condition is met

function insertionSort(arr){
	var output = [];

	for(var b = 1; b < output.length; b++){
		var counter = 0;

		for(var a = b-1; a >= 0; a--){
			var numRight = output[b - counter];
			var numLeft = output[a];

			if(numRight < numLeft){
				output[b-counter] = numLeft;
				output[a] = numRight;
			}

			counter++;
		}
	}

	return output;
		
}

// Uncomment to log result
// console.log(insertionSort(arr));