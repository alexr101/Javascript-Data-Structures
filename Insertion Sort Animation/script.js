var marginsArray = [];
var dots = document.getElementsByClassName('dot');

[].forEach.call(dots, function(element){
	var pxMargin = element.style.marginTop;
	var numMargin = parseInt(pxMargin.substring(0, pxMargin.length - 2));
	marginsArray.push(numMargin);
});

var sortBtn = document.getElementById('sort-btn');

sortBtn.addEventListener('click', sort)

function sort(){
	insertionSort(marginsArray);


	[].forEach.call(dots, function(element, index){	
		window.setTimeout(function() {
			changeMargin(element, marginsArray[index]);
		}, 30 * index);
	})
	
}

