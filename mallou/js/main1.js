function gras() {
	console.log ("gras");
	var e = document.querySelector("textarea");
	console.log (e.style);
	e.style.fontWeight = "bold";
}
function italique() {
	var e = document.querySelector("textarea");
	e.style.fontStyle= "italic";
	}
function underline() {
	var e = document.querySelector("textarea");
	e.style.textDecoration="underline";
	}

function changesize(obj) {
	console.log(obj.value);
	var e = document.querySelector("textarea");
	e.style.fontSize = obj.value;
}
function fontfamily(obj) {
	console.log("fontfamily");
	var e = document.querySelector("textarea");
	e.style.fontFamily = obj.value;
}