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
	
	// Select Field for Project Type.
	function selectType() {
		var formTag = document.getElementsByTagName("form");	//array
			selectLi = $("selectType")
			makeSelect = document.createElement("select");
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
	
	//Value of selected radio button.
	
	function getSelectedRadio() {
		var radios = document.forms[0].models;
		 for (var i=0; i<radios.length; i++) {
		 	if(radios[i].checked){
		 		workValue = radios[i].value;
		 	};
		 };
	};
	
	//Value of selected checkbox.
	
	function getCheckboxValue() {
		var checkboxes = document.forms[0].drawings;
			for (var i=0; i<checkboxes.length; i++) {
				if (checkboxes[i].checked){
					dwgValue = 	checkboxes[i].value;		
				}else{
					dwgValue = "No Drawings Needed!"
			};
	};
	
	
	
	// Store Data
	
	function storeData() {
		var id				= Math.floor(Math.random()*10000001);
		getSelectedRadio();
		getCheckboxValue();
		var item			= {};
			item.pType		= ["Project Type:", $("pType").value];
			item.pName		= ["Project Name:", $("pName").value];
			item.pNum		= ["Project Number:", $("pNum").value];
			item.dName		= ["Designer Name:", $("dName").value];
			item.dateComp	= ["Completion Date:", $("dateComp").value];
			item.dwg		= ["Drawings:", dwgValue];
			item.dComt		= ["Drawings Comments:", $("dComments").value];
			item.work3d		= ["3D Work:", workValue];
			item.wComt		= ["3D Work Comments:", $("wComments").value];
			item.rend		= ["Renderings:", $("rend").value];
			
		localStorage.setItem(id, JSON.stringify(item));
		alert("Contact Saved!");
	};
	
	//Variable defaults
	
	var projectType = [" -- Choose A Type -- ", "Site Development", "Building Envelope", "Interior Design"],
		workValue,
		dwgValue = "No Drawings Needed!"
	;
	selectType();

	
	
	//Set link & submit click Events
	
//	var displayLink = $("display");
//	displayLink.addEventListener("click", getData);
//	var clearLink = $("clear");
//	clearLink.addEventListener("click", clearLocal);
	var saveLink = $("submit");
	saveLink.addEventListener("click", storeData);




});
