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
	
	// Field Elements
	
	// Select Field
	function selectType() {
		var formTag = document.getElementsByTagName("form");	//array
			selectLi = $("selectType")
			makeSelect = document.createElement("selectType");
			makeSelect.setAttribute("id", "pType")
		 for (var i=0, j=projectType.length; i<j; i++) {
		 	var makeOption = document.createElement("option");
		 	var optText = projectType[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);
	};
	
	//Variable defaults
	
	var projectType = [" -- Choose A Type -- ", "Site Development", "Building Envelope", "Interior Design"];
	selectType();

	
	
	//Set link & submit click Events
	
//	var displayLink = $("display");
//	displayLink.addEventListener("click", getData);
//	var clearLink = $("clear");
//	clearLink.addEventListener("click", clearLocal);
//	var saveLink = $("submit");
//	saveLink.addEventListener("click", storeData);




});
