// O(n^2)
// Two loops
function harmlessRansomNote(noteText, magazineText) {
	magazineArr = magazineText.split(' ');
	noteArr = noteText.split(' ');

	for(var i = 0; i < magazineArr.length; i++) {
		var magazineWord = magazineArr[i];

		for(var j = 0; j < noteArr.length; j++) {
			var noteWord = noteArr[j];

			if(magazineWord === noteWord) {
				noteArr.splice(j, 1);
			}
		}
	}

	if(noteArr.length === 0)
		return true
	else
		return false;
}

var found = harmlessRansomNote('hi you', 'hi this article is written just for you');
console.log(found);


// O(n + m)
// Use a hashtable for constant time lookup
function harmlessRansomNote2(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineHT = {};
	var found = false;

	magazineArr.forEach(function(word) {
		if(!magazineHT[word]) magazineHT[word] = 0;
		magazineHT[word]++;
	});

	for(var i = 0; i < noteArr.length; i++) { // use for loop for ability to break out w return
		var word = noteArr[i];

		if(magazineHT.hasOwnProperty(word) && magazineHT[word] > 0) 
			magazineHT[word]--;
		else 
			return false;
	}

	return true;
}

var found2 = harmlessRansomNote2('hi you', 'hi this article is written just for you');
console.log(found2);
