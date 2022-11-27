// JavaScript Document
function write(){

console.log("Holy its woking");

//first mythical character
var creature = document.getElementById('cre').value;
	console.log(creature);
	
//second mythical character
var mythCre = document.getElementById('mythcre').value;
	console.log(mythCre);

//room in the house
var room = document.getElementById('room').value;
	console.log(room);

//name or cartoon
var car = document.getElementById('cartoon').value;
	console.log(car);

//first body part
var body = document.getElementById('body').value;
	console.log(body);
	
//second body part
var bodyPar = document.getElementById('bodypar').value;
	console.log(bodyPar);
	
//type of shoes
var shoe = document.getElementById('shoes').value;
	console.log(shoe);
	
//accessory
var acc = document.getElementById('accessory').value;
	console.log(acc);
	
//action verb ending in ING
var verb = document.getElementById('verb').value;
	console.log(verb);
	
//type of florring
var floor = document.getElementById('floor').value;
	console.log(floor);
//radio buttons
//First color choice
var color = document.querySelector('input[name="color"]:checked').value;
	console.log(color);
//Second color choice
var colortwo = document.querySelector('input[name="colorTwo"]:checked').value;
	console.log(colortwo);
//Animal choice
var animal = document.querySelector('input[name="animal"]:checked').value;
	console.log(animal);
	
//IF statements
var colortwoMessage;

if(colortwo=="pink"){
	colortwoMessage = " a pink skirt";
}else if(colortwo=="magenta"){
	colortwoMessage = " magenta track pants";
}else if(colortwo=="orange"){
	colortwoMessage = " orange sweat pants";
}else if(colortwo=="violet"){
	colortwoMessage = " violet leggings";
}else if(colortwo=="brown"){
	colortwoMessage = " brown pants";
}

//self generating photo CHANGE THE PHOTO BEFORE SUBMISSION
document.getElementById('output').innerHTML = "<img class='img-fluid' src='photos/troll.jpg' alt='stories'>";
//output
	document.getElementById('output').innerHTML += "<h2>What If...</h>";
document.getElementById('output').innerHTML += "<p>What if the reality that we all know isn’t what we think it is? What if there are just "+creature+"s sitting in the clouds in their "+room+" watching everything we do on T.V.</p>";
document.getElementById('output').innerHTML += "<p>Every person’s life is just another channel, a little skit written by an author for whom we never knew existed. Or what if we are just an animation like "+car+", just mindless drawings moving across a page.</p>";
document.getElementById('output').innerHTML += "<p>What if the claps thunder, we hear on dark and stormy nights is just the "+creature+" laughing so hard they cry because someone on there favourite show did something hilarious? </p>";
document.getElementById('output').innerHTML += "<p>"+verb+" their gigantic "+body+" against their "+floor+" floors or giving their "+bodyPar+"  a good slap.</p>";
document.getElementById('output').innerHTML += "<p>Or what if we are in a video game? </p>";
document.getElementById('output').innerHTML += "<p>Where "+mythCre+"s get to design us into there own personal avatar, choosing what we are wearing, "+color+" shirt, "+colortwoMessage+", "+shoe+"s and a "+acc+".</p>";
document.getElementById('output').innerHTML += "<p>They would get to choose what we do for work, when we leave and when we come home. Imagine if everything you know to be real was suddenly replaced with the knowledge that we all have no control, no say in what happens next. It is all left to some mythical creature sitting in the clouds, playing with us like puppets to amuse the common folk. But I can see the day when it is no longer dark and stormy, and we will break free of the trance that we have been put in. Head held high as we become "+animal+"s again.</p>";
	
}