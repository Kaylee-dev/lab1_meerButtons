document.body.style.backgroundColor = "grey";
var style = document.createElement('style')
style.innerHTML = "div {width: 400px; height: 100px; background-color: white; position: absolute;";
document.body.appendChild(style);


var button1 = document.createElement("button");// createElement maakt hier een button aan.
button1.innerHTML = "Button 1";
document.body.appendChild(button1); /*appendChild voegt de button toe aan de body*/
button1.style.backgroundColor = "green";
button1.style.marginLeft = "40px";

button1.onclick = function(){
	document.body.style.backgroundColor = "green";
}


var button2 = document.createElement("button");
button2.innerHTML = "Button 2";
document.body.appendChild(button2);
button2.style.backgroundColor = "red";

button2.onclick = function(){
	document.body.style.backgroundColor = "red";
}


var button3 = document.createElement("button");
button3.innerHTML = "Button 3";
document.body.appendChild(button3);
button3.style.backgroundColor = "blue";

button3.onclick = function(){
	document.body.style.backgroundColor = "blue";
}




