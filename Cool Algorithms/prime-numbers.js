function isPrime(n){
	var divisor = 2; //all numbers are divisible by 1...

	while(divisor < n){
		if(n % divisor === 0) return false;

		divisor++;
	}

	return true;
}

console.log(isPrime(5)); //true
console.log(isPrime(23)); //true
console.log(isPrime(25)); //false





