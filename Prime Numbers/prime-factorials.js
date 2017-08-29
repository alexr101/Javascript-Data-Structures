function primeFactorial(n){
	var factorials = [];
	var divisor = 2;

	while(n>2){
		if(n % divisor === 0){
			factorials.push(divisor);
			n = n / divisor;
		} else {
			divisor++;
		}
	}

	return factorials;
}

console.log(primeFactorial(12342));





