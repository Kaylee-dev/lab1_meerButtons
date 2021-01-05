var container = document.getElementById("container");

for(i = 1; i <= 30; i++){
	var buttons = document.createElement("button");
	document.body.appendChild(buttons);
	var text = document.createTextNode(i);
	buttons.appendChild(text);
	console.log(buttons);
}


