"use strict";

//declare global variables for setup page
var waitForUser;

//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//runs getTest() on startup
function setUpPage() {
   geoTest()
}

//creates map unless user times out or declines location
function geoTest(){
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
	} else {
		fail();
	}
}

//function runs if user times out or declines location access
function fail(){
	//shows error message for map
	document.getElementById("map").innerHTML = "Unable to access your current location.";
	
	//sets lat, long, and alt to unknown since location access was denined/failed
	document.getElementById("longitude").innerHTML = "Unknown"
	document.getElementById("latitude").innerHTML = "Unknown";
	document.getElementById("altitude").innerHTML = "Unknown";
}

//function creates map based on user position and displays lat, lon, and alt
function createMap(position){
	clearTimeout(waitForUser);
	
	//outputs lat, long, alt to console
	console.log("Longitude: " + position.coords.longitude);
	console.log("Latitude: " + position.coords.latitude);
	console.log("Altitude: " + position.coords.altitude);
	
	//gets users position and makes google maps based on info
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var mapOptions = {
		center: new google.maps.LatLng(currPosLat, currPosLng), zoom: 10
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	//gets lat, long, alt from users current position and sets text in page
	document.getElementById("longitude").innerHTML = position.coords.latitude;	
	document.getElementById("latitude").innerHTML = position.coords.longitude;
	document.getElementById("altitude").innerHTML = position.coords.altitude;
	
	//checks if lat, long, or alt is unknown and then sets text as unknown
	if (document.getElementById("longitude").innerHTML === ""){
		document.getElementById("longitude").innerHTML = "Unknown";
	}
	if (document.getElementById("latitude").innerHTML === ""){
		document.getElementById("latitude").innerHTML = "Unknown";
	}
	if (document.getElementById("altitude").innerHTML === ""){
		document.getElementById("altitude").innerHTML = "Unknown";
	}
}

// run setUpPage() function when page finishes loading
window.addEventListener("load", setUpPage, false);