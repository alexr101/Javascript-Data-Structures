/*
	4! = 4 * 3 * 2 * 1
*/

// recursive
function recursiveFactorial(num) {
	if(num === 1) return num;
	return num * recursiveFactorial(num-1);;
}

var factorial1 = recursiveFactorial(4);


console.log(factorial1);


function loopFactorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result = result * i;
	}

	return result;
}

var factorial2 = loopFactorial(4);

console.log(factorial2);
