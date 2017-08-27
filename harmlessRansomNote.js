// O(n^2)
function harmlessRansomNote(noteText, magazineText) {
	magazineText = magazineText.split(' ');
	noteText = noteText.split(' ');

	for(var i = 0; i < magazineText.length; i++) {
		var magazineToken = magazineText[i];

		for(var j = 0; j < noteText; j++) {
			var noteToken = noteText[j];

			if(magazineToken === noteText) {
				noteText.splice(j, 1);
			}
		}
	}

	if(noteText.length === 0)
		return true
	else
		return false;
}

var found = harmlessRansomNote(['hi you'], ['hi, this article is written just for you']);