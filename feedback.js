"use strict";

//global variable
var formValidity = true;
var devicesOwned = [];
var arrayString;
var objectString;
var devices = {};


//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//checks other box if user entered text in text area without checking other first
 function autocheckCustom(){
	 var messageBox = document.getElementById("browserText");
	 if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder){
		 document.getElementById("otherBrowser").checked = "checked";
	 }
 }
 
//checks if user checked other box and put no text
function validateCheck(){
	var errorDiv = document.querySelector("#message .errorMessage");
	var msgBox = document.getElementById("browserText");
	 
	try{
		//sends error if the other box is checked but user entered no text in text box
		if(document.getElementById("otherBrowser").checked && ((msgBox.value === "") || (msgBox.value === msgBox.placeholder))){
			throw "Please enter your text."
		} else {
			errorDiv.style.display = "none";
			msgBox.style.background = "white";
		}
	}
	//outputs error message and colors area with error
	catch (msg){
		console.log("Please enter text in checked box.")
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		msgBox.style.background = "rgb(255,233,233)";
		formValidity = false;
	}
	
	
	try{
		//checks if user inputted invalid symbols in text box
		if (/[!@$#_*()&?]/.test(msgBox.value) === true){
			throw "Text can not contain the following symbols: ! @ $ # _ * ( ) & ? ";
		} else {
			errorDiv.style.display = "none";
			msgBox.style.background = "white";
		}
	}
	//outputs error message and colors area with error
	catch (msg){
		console.log("Please fix text in checked box.")
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		msgBox.style.background = "rgb(255,233,233)";
		formValidity = false;
	}
}

//checks if user selected a device for required question
function validateSelection(){
	var selectElements = document.querySelectorAll("#selection select");
	var errorDiv = document.querySelector("#selection .errorMessage");
	var fieldsetValidity = true;
	
	//outputs error with user did not select device
	try{
		if (document.getElementById("device").value === "none"){
			document.getElementById("device").style.border = "1px solid red";
			fieldsetValidity = false;
		} else {
				document.getElementById("device").style.border = "";
			}
		if (fieldsetValidity === false){
			throw "Please select a device.";
		} else {
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
		}
	}
	//outputs error and colors area with the error
	catch(msg){
		console.log("Please select a device.")
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

//makes sure form is valid for submitting
function validateForm(evt){
	if (evt.preventDefault){
		//prevent form from submitting
		evt.preventDefault();
	} else {
		//prevent form from submitting in IE8
		evt.returnValue = false;
	}
	//resets form validity for resubmitting
	formValidity = true;

	//calls functions that validate check boxes and selection
	validateCheck();
	validateSelection()
	
	//clears existing error text if form is valid
	if (formValidity === true){
		document.getElementById("errorText").innerHTML = "";
		document.getElementById("errorText").style.display = "none";
		document.getElementsByTagName("form")[0].submit();
	} else {
		document.getElementById("errorText").style.display = "block";
		scroll(0,0);
	}
}

//adds checked values to array
function registerDevices(event) {
	var callerElement = event.target || event.srcElement;
	var deviceName = callerElement.value;
	//if checkbox is checked, adds value to array
	if (callerElement.checked) {
		devicesOwned.push(deviceName);
	} else {
		//removes value from array if not checked
		for (var i = 0; i < devicesOwned.length; i++) {
			if (devicesOwned[i] === deviceName) {
				devicesOwned.splice(i,1);
			}
		}
	}
}


//converts array to string
function convertToString(){
	//convert owned devices array to string
	arrayString = devicesOwned.toString();
	
	//convert devices object to string
	objectString = JSON.stringify(devices);
}


function createEventListeners(){
	var messageBox = document.getElementById("browserText");
		if (messageBox.addEventListener){
			messageBox.addEventListener("blur", autocheckCustom, false);
	} else if (messageBox.attachEvent){
		messageBox.attachEvent("onblur", autocheckCustom);
	}
	var form = document.getElementsByTagName("form")[0];
	if (form.addEventListener){
		 form.addEventListener("submit", validateForm, false);
	} else if (form.attachEvent){
		 form.attachEvent("onsubmit", validateForm);
	}
	
	var devices = document.getElementsByName("ownDevice");
	if (devices[0].addEventListener) {
      for (var i = 0; i < devices.length; i++) {
        devices[i].addEventListener("change", registerDevices, false);
		}
	} else if (devices[0].attachEvent) {
      for (var i = 0; i < devices.length; i++) {
        devices[i].attachEvent("onchange", registerDevices);
		}
	}
	
}

//runs event listeners
 function setUpPage(){
	 createEventListeners();
 }
 
//runs setUpPage() function on page load
 if (window.addEventListener){
	 window.addEventListener("load", setUpPage, false);
 }else if (window.attachEvent){
	 window.attachEvent("onload", setUpPage);
 }