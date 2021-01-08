var container = document.getElementById("container");

for(i = 1; i <= 30; i++){
	var button = document.createElement("button");
	document.body.appendChild(button);
	var text = document.createTextNode(i);
	button.appendChild(text);
	var color = ["green", "pink", "salmon", "violet", "black"]
	button.style.backgroundColor = color[0];
	if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25) {
		document.body.appendChild(document.createElement("br"));
	}
	button.onclick = function(){
		var currentColor = this.style.backgroundColor;
		this.style.backgroundColor = color[color.indexOf(currentColor) + 1];
		if((color.indexOf(currentColor) + 1) == color.length){
			this.remove();
		}
}
}

