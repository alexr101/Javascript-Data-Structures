var array = [1, 2, 3, 4, 5];

function linearSearch(arr, value){
	var answer = -1;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === value){
			answer = i;
			break;
		} 
	}

	return answer;
}

console.log(linearSearch(array, 5));