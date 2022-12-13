// JavaScript Document


//initializing a variable - this variable is an OBJECT
//the properties will hold the filename of the image we are going to show
var character={face:"", glasses:"", tree:"", purple:"", green:"", topper:""};

//this function will set the face property
function setTree(changling){
	character.tree=changling;
	console.log(character.tree);
	
	bodyBuilder();
}
function setPurple(changling){
	character.purple=changling;
	console.log(character.purple);
	
	bodyBuilder();
}

function setGreen(changling){
	character.green=changling;
	console.log(character.green);
	
	bodyBuilder();
}
function setFace(changling){
	character.face=changling;
	console.log(character.face);
	//run the bodyBuilder function
	bodyBuilder();
	
	
	
}
//this function will set the glasses property
function setGlasses(changling){
	character.glasses=changling;
	console.log(character.glasses);
	//run the bodyBuilder function
	bodyBuilder();
	
}

function setTopper(changling){
	character.topper=changling;
	console.log(character.topper);
	
	bodyBuilder();
}





//function will place the image on the page.
function bodyBuilder(){
	
	
	
if(character.glasses!=""){
document.getElementById('glasses').innerHTML="<img class='img-fluid' src='images/"+character.glasses+"' alt='face'>";
	}
if(character.purple!=""){
document.getElementById('purple').innerHTML="<img class='img-fluid' src='images/"+character.purple+"' alt='face'>";
	}
if(character.green!=""){
document.getElementById('green').innerHTML="<img class='img-fluid' src='images/"+character.green+"' alt='face'>";
}
if(character.topper!=""){
	document.getElementById('topper').innerHTML="<img class='img-fluid' src='images/"+character.topper+"' alt='face'>";
}
if(character.tree!=""){
document.getElementById('tree').innerHTML="<img class='img-fluid' src='images/"+character.tree+"' alt='face'>";
}
if(character.face!=""){   
	document.getElementById('face').innerHTML="<img class='img-fluid' src='images/"+character.face+"' alt='face'>";
	}
}

function write(){
	var userName = document.getElementById('name').value;
	console.log("creature");
	
	document.getElementById('output').innerHTML = "<h2>Merry Christmas "+userName+"!</h2>";
}


