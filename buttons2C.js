var container = document.getElementById("container");


for(i = 1; i <= 30; i++){
	var button = document.createElement("button");
	document.body.appendChild(button);
	var text = document.createTextNode(i);
	button.appendChild(text);
	button.style.backgroundColor = "green";
	if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25) {
		document.body.appendChild(document.createElement("br"));
	}
	button.onclick = function(){
		var currentColor = this.style.backgroundColor;
		if (currentColor == "green"){
			this.style.backgroundColor = "red";
		}
		else if (currentColor == "red") {
			this.style.backgroundColor = "purple";
		}
		else if (currentColor == "purple") {
			this.style.backgroundColor = "blue";
		}
		else if (currentColor == "blue") {
			this.style.backgroundColor = "black";
		}
		else if (currentColor == "black") {
			
		}
}
}

