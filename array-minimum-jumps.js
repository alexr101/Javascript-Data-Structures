// http://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/

/*
Given an array of integers where each element represents the max number of steps that can be made forward from that element. 
Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element).
If an element is 0, then cannot move through that element.

Example:

Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3 (1-> 3 -> 8 ->9)

*/


function minJump(arr, count, index, jumpsArr) {
	var index = index || 0;
	var count = count || 0;
	var jumps = arr[index];
	var jumpsArr = jumpsArr || [];

	if(index === arr.length -1) {
		return count;
	} else if(index > arr.length) { // make sure not to add false counts
		return;
	}

	for(var i = 1; i <= jumps; i++) {
		jumpsArr.push( minJump(arr, count + 1, index + i, jumpsArr) );

	}
	var minimumPath;

	for(var i = 0; i < jumpsArr.length; i++) {
		var current = jumpsArr[i];

		if(current) {
			if(!minimumPath)
				minimumPath = current;
			else if (count < minimumPath)
				minimumPath = current;
		}

	}

	if(index === 0)
		return minimumPath;
}


var arr = [4, 1, 1, 1, 1, 1];
var minimumJumps = minJump(arr);

console.log(minimumJumps);

