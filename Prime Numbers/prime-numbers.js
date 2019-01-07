function isPrime(n){
	var divisor = 2; //all numbers are divisible by 1...

	while(divisor < n){
		if(n % divisor === 0) { 
			console.log({
				n:n,
				divisor:divisor
			});
			
			return false;
		}

		divisor++;
	}

	return true;
}

console.log(isPrime(5)); //true
console.log(isPrime(15)); //true 15
console.log(isPrime(25)); //false





