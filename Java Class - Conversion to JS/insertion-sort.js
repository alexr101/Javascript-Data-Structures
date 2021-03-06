//Array Visualization :)
// |   | j | i |

function insertionSort(arr){

	//start at 1 because the first element is already sorted
	for(var i = 1; i < arr.length; i++){
		//number value of element being evaluated
		var element = arr[i];
		//Sorted side
		var j = i - 1;

		//so if j is initially bigger than its right element
		//move j element one forward
		//decrease j by one to compare var element to next left j
		//and so on
		while(j > 0 && arr[j] > element){
			arr[j+1] = arr[j];
			j--;
		}

		//once it's all done move the element one spot to the current j
		arr[j+1] = element;

	}

	return arr;
}

//practice rewrite
function insertionSort(arr){
	for(var i = 0; i < arr.length; i++){
		var element = arr[i];
		var j = i - 1;

		while(j > 0 && j > element){
			arr[j+1] = element;
			j--;
		}

		arr[j+1] = element;
	}
}

//EGAD!
console.log(insertionSort([1, 43, 2, 532, 3, 42]));