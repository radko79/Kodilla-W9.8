// scripts.js

// https://www.bootply.com/wYydqqLLWR
$('#otherCarousel').carousel({
  interval: 3000
})

$('.carousel .item').each(function(){
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
});

var leftChevron = document.getElementById('leftChevron'),
	rightChevron = document.getElementById('rightChevron'),
	actualNumber = document.getElementById('pageNumber'),
	actualNumber = 01;

document.getElementById("pageNumber").innerHTML = actualNumber;

leftChevron.addEventListener('click', function(e) {
	if(actualNumber == 1) {
		actualNumber = 5;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	} else {
		actualNumber--;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	}
});

rightChevron.addEventListener('click', function(e) {
	if(actualNumber == 5) {
		actualNumber = 1;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	} else {
		actualNumber++;
		document.getElementById("pageNumber").innerHTML = actualNumber;
	}
});

