//VFW - Project 2
//Jairo Daniel Bernal
//VFW 1112
//12/01/2011		

// DOM Content Loaed.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	
	//Variable defaults
	
	var projectType = ["-- Choose A Type --", "Site Development", "Building Envelope", "Interior Design"];
	

	
	
	//Set link & sudmit click Events
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var saveLink = $("submit");
	saveLink.addEventListener("click", storeData);




});
