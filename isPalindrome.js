String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}

//Regex Solution
function isPalindrome(string) {
	// \s = anything but white spaces
	// \s^ = only white spaces
	// | or
	// [^a-z] any non-alphabetic characters
	// g - global match. Doesn't stop at first occurrence
	string = string.replace(/\s^|[^A-Za-z]/g, '').toLowerCase();

	var reverse = string.reverse();

	return reverse === string;
}

var result = isPalindrome('Mada.m im a, dam');

console.log(result);


// Non regex solution
function isPalindrome2(string) {
	stringArr = string.toLowerCase().split('');
	var validChars = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
	
	for(var i = 0; i < stringArr.length; i++) {
		var charToken = stringArr[i];

		if(validChars.indexOf(charToken) < 0) {
			stringArr.splice(i, 1);
			i--; // once you splice the arr, you'll skip a char in the next loop
		}
	}

	stringArr.reverse().join('')
	return stringArr.join('') === stringArr.reverse().join('');

}

var result2 = isPalindrome2('Race, car');

console.log(result2);