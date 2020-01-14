var boxOne = document.querySelector(".box-one");
var boxTwo = document.querySelector(".box-two");
var boxTree = document.querySelector(".box-tree");
var boxFor = document.querySelector(".box-for");
var boxFive = document.querySelector(".box-five");
var boxSix = document.querySelector(".box-six");
var boxSeven = document.querySelector(".box-seven");
var boxEight = document.querySelector(".box-eight");
var boxNine = document.querySelector(".box-nine");


/*oncontextmenu = preventDefault()

event.preventDefault().contextmenu()

contextmenu
*/

function lol(){
	var cancellationEvent = document.addEventListener('contextmenu', event => event.preventDefault());
}
/*var cancellationEvent = document.addEventListener('contextmenu', event => event.preventDefault());
*/
lol();

boxOne.oncontextmenu = function(){
	boxOne.innerHTML = "X";
	if(boxOne.innerHTML == "X"){
	boxOne.onclick = null
	}
}
boxTwo.oncontextmenu = function(){
	boxTwo.innerHTML = "X";
	if(boxTwo.innerHTML == "X"){
	boxTwo.onclick = null
	}
}
boxTree.oncontextmenu = function(){
	boxTree.innerHTML = "X";
	if(boxTree.innerHTML == "X"){
	boxTree.onclick = null
	}
}
boxFor.oncontextmenu = function(){
	boxFor.innerHTML = "X";
	if(boxFor.innerHTML == "X"){
	boxFor.onclick = null
	}
}
boxFive.oncontextmenu = function(){
	boxFive.innerHTML = "X";
	if(boxFive.innerHTML == "X"){
	boxFive.onclick = null
	}
}
boxSix.oncontextmenu = function(){
	boxSix.innerHTML = "X";
	if(boxSix.innerHTML == "X"){
	boxSix.onclick = null
	}
}
boxSeven.oncontextmenu = function(){
	boxSeven.innerHTML = "X";
	if(boxSeven.innerHTML == "X"){
	boxSeven.onclick = null
	}
}
boxEight.oncontextmenu = function(){
	boxEight.innerHTML = "X";
	if(boxEight.innerHTML == "X"){
	boxEight.onclick = null
	}
}
boxNine.oncontextmenu = function(){
	boxNine.innerHTML = "X";
	if(boxNine.innerHTML == "X"){
	boxNine.onclick = null
	}
}


boxOne.onclick = function(){
	boxOne.innerHTML = "O";
	if(boxOne.innerHTML == "O"){
	boxOne = lol();
	}
}
boxTwo.onclick = function(){
	boxTwo.innerHTML = "O";
	if(boxTwo.innerHTML == "O"){
	boxTwo = lol();
	}
}
boxTree.onclick = function(){
	boxTree.innerHTML = "O";
	if(boxTree.innerHTML == "O"){
	boxTree = lol();
	}
}
boxFor.onclick = function(){
	boxFor.innerHTML = "O";
	if(boxFor.innerHTML == "O"){
	boxFor = lol();
	}
}
boxFive.onclick = function(){
	boxFive.innerHTML = "O";
	if(boxFive.innerHTML == "O"){
	boxFive = lol();
	}
}
boxSix.onclick = function(){
	boxSix.innerHTML = "O";
	if(boxSix.innerHTML == "O"){
	boxSix = lol();
	}
}
boxSeven.onclick = function(){
	boxSeven.innerHTML = "O";
	if(boxSeven.innerHTML == "O"){
	boxSeven = lol();
	}
}
boxEight.onclick = function(){
	boxEight.innerHTML = "O";
	if(boxEight.innerHTML == "O"){
	boxEight = lol();
	}
}
boxNine.onclick = function(){
	boxNine.innerHTML = "O";
	if(boxNine.innerHTML == "O"){
	boxNine = lol();
	}
}