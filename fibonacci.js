
// For loop
function fibonacci(num){
  var prev = 0;
  var next = 1;

  for(var i = 0; i < num; i++) {
  	var temp = prev;
  	prev = next;
  	next = temp + next;
  }

  return next;
}

console.log(fibonacci(8));

// 3
// 0, 1 , 1, 2, 3, 
// The issue here is that this is nearly exponential in time completxity
function fibonacci2(num) {
	if(num <= 1) return 1;

	var left = fibonacci2(num-1);
	var right = fibonacci2(num-2);

	if(right%2 !== 0)
		right = 0;

	if(left%2 !== 0)
		left = 0;

	return left + right;
}

console.log(fibonacci2(10));

/*
	VISUALIZATION
	
	fibonacci 4
	return fib(2) + fib(3)
	
	fibonacci 2																						fibonacci 3              
	return fib(0) + fib(1)	  														return fib(1) + fib(2)   

	fibonacci 0								fibonacci 1              		fibonacci 1  							fibonacci 2      
	return fib(0) + fib(1)	  return fib(1) + fib(2)      return fib(-1) + fib(0)	  return fib(0) + fib(1)  
*/

