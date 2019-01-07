var settings = {
	minDots: 330,
	maxDots: 330,
	minMargin: 5,
	maxMargin: 550,
	containerId: 'dot-container'
}

init();

function getRandom(min, max){
	var range = max - min;
	return Math.floor( (Math.random() * range ) + min );
}

function changeMargin(element, newMargin){
	element.style.marginTop = newMargin + 'px';
}

function generateDot(container){
	var div = document.createElement('div');
	div.className += 'dot';
	container.appendChild(div);
	div.style.marginTop = getRandom(settings.minMargin, settings.maxMargin) + 'px';
}

function init(){
	var dotContainer = document.getElementById(settings.containerId);
	var randomNumber = getRandom(settings.minDots, settings.maxDots);

	for(var i = 0; i < randomNumber; i++){
		generateDot(dotContainer);
	}
}





