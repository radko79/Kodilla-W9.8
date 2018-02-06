// scripts.js

var leftChevron = document.getElementById('leftChevron'),
	rightChevron = document.getElementById('rightChevron'),
	actualNumber = document.getElementById('pageNumber'),
	actualNumber = 01;

document.getElementById("pageNumber").innerHTML = actualNumber;

leftChevron.addEventListener('click', function(e) {
	if(actualNumber == 1) {
		return null;
	} else {
		actualNumber--;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	}
});

rightChevron.addEventListener('click', function(e) {
	if(actualNumber == 5) {
		return null;
	} else {
		actualNumber++;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	}
});