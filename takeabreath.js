
$("#breath_button").click(function() {
	setTimeout(inFunc, 3000);
});

function inFunc() {
	document.getElementById("prompt_text").innerHTML = "Breathe In";
	document.getElementById("prompt_text").style.backgroundColor = '#46c0c9';
	setTimeout(outFunc, 5000);
}

function outFunc() {
	document.getElementById("prompt_text").innerHTML = "Breathe Out";
	document.getElementById("prompt_text").style.backgroundColor = '#00ff26';
	setTimeout(inFunc, 7000);
}
