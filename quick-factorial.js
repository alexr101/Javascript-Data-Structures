//Factorial 4! = 4*3*2*1 = ?

function factorial(value){
	if (num === 1){
		return num;
	} else {
		return value * factorial(num-1);
	}
}

factorial(5);
factorial(12);