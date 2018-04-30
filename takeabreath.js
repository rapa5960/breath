$("#breath_button").click(function() {
	setTimeout(count3, 1000);
});

function count3() {
	document.getElementById("prompt_text").innerHTML = "3";
	setTimeout(count2, 1000);
}

function count2() {
	document.getElementById("prompt_text").innerHTML = "2";
	setTimeout(count1, 1000);
}

function count1() {
	document.getElementById("prompt_text").innerHTML = "1";
	setTimeout(inFunc, 1000);
}

function inFunc() {
	document.getElementById("prompt_text").innerHTML = "Breathe In";
	document.getElementById("prompt_text").style.backgroundColor = '#46c0c9';
	setTimeout(outFunc, 4000);
}

function outFunc() {
	document.getElementById("prompt_text").innerHTML = "Breathe Out";
	document.getElementById("prompt_text").style.backgroundColor = '#00ff26';
	setTimeout(inFunc, 5000);
}
