// print fizz when divisible by 5
// print buzz when divisible by 3
// print fizzbyzz when divisible by both

// lol
console.log('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,...');


function fizzBuzz1(val){
	for(var i = 1; i <= val; i++) {
		if(i % 15 === 0) console.log('fizzbuzz');
		else if(i % 5 === 0) console.log('fizz');
		else if(i % 3 === 0) console.log('buzz');
		else console.log(i);
	}
}

fizzBuzz1(15);

function fizzBuzz2(val) {
	for(var i = 1; i <= val; i++) {
		var output = '';

		if(i%3 === 0)
			output = output + 'Fizz';
		if(i%5 === 0)
			output = output + 'Buzz'
		if(i%3 !== 0 && i%5 !== 0)
			output = i;

		console.log(output);
	}
}

fizzBuzz2(15)

function fizzBuzz3(val) {

	for(var i = 1; i <= val; i++) {
		var output = '';

		if(i%3 === 0)
			output =  'Fizz';
		if(i%5 === 0)
			output = output + 'Buzz'
		if(output === '')
			output = i;

		console.log(output);
	}
}

fizzBuzz3(15);

function customFizzBuzz(length, fizz, buzz) {
	var length = length || 0;
	var fizz = fizz || 3;
	var buzz = buzz || 5;

	for(var i = 1; i <= length; i++) {
		var output = '';

		if(i%fizz === 0)
			output = 'Fizz';
		if(i%buzz === 0)
			output = output + 'Buzz';
		if(output === '')
			output = i;

		console.log(output);
	}
}

customFizzBuzz(25, 2, 6);


function fizzBuzz5(length, numbers, strings) {
	if(numbers.length !== strings.length) {
		throw 'numbers and strings length must match!';
	}

	for(var i = 1; i <= length; i++) {
		var output = '';

		for(var j = 0; j < numbers.length; j++) {
			if(i%numbers[j] === 0) {
				output = output + strings[j];
			}
		}

		if(output === '') {
			output = i;
		}

		console.log(output);
	}
}

fizzBuzz5(15, [3, 5], ['fizz', 'buzz']);








