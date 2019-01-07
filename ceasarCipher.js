// shift string amount of time to the right or left 
// in alphabet
// a, 1 = b
// b, 3 = e
 
function ceasarCipher(string, shift) {
	var result = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';

	for(var i = 0; i < string.length; i++) {
		var charToken = string[i];
		var index = alphabet.indexOf('a') + shift;
		var temp = index; 
		
		if(index < 0 )
			index = alphabet.length + temp;
		else if(index > alphabet.length-1) {
			index = 0 + temp - alphabet.length ;
		}

		result += alphabet[index];
	}

	return result;
}

var cipher1 = ceasarCipher('a', 50);

console.log(cipher1);