// RECURSIVE!
function countdown(n) {
	if(n === 0) return;
	console.log(n);
	return countdown(n - 1);
}

countdown(10);

// iterated
function countdownIterated(n) {
	for(var i = n; i > 0; i--) {
		console.log(i);
	}
}
countdownIterated(10);


// looped
function countdownLooped(n) {
	while(n > 0) {
		console.log(n);
		n--;
	}
}

countdownLooped(10);

