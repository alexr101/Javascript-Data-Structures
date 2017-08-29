
//O(n2)
function selectionSort(arr){

	for(var i = 0; i < arr.length; i++){
		var minimum = i;

		for(var j = i + 1; j < arr.length; j++){
			if(arr[j] < arr[minimum]){
				minimum = j;
			}
		}

		var tempFirst = arr[i];
		arr[i] = arr[minimum];
		arr[minimum] = tempFirst;
	}

	return arr;
}

var array = [3, 54, 123, 6, 121, 76, 31]

//WOW :D
oconsole.log(selectionSort(array));