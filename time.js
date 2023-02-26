
var dateToday = new Date();
var dateObject = new Date();
var countdown;

//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function setDesiredDate(){
	var month = document.getElementById("desiredMonth").value - 1;
	var year = document.getElementById("desiredYear").value;
	var day = document.getElementById("desiredDay").value;
	
	dateObject = new Date(year, month, day, 0, 0, 0);
	
	var userMonth = dateObject.getMonth() + 1;
	var userYear = dateObject.getFullYear();
	var userDay = dateObject.getDate();
	
	var currentMonth = dateToday.getMonth() + 1;
	var currentYear = dateToday.getFullYear();
	var currentDay = dateToday.getDate();
	
	//checks if user entered month, year, and day are a positive value
	try{
		if(month < 0){
			console.log("Please enter a positive number for the month.");
			return alert("Please enter a positive number for the month.");
		} else if(year < 0){
			console.log("Please enter a positive number for the year.");
			return alert("Please enter a positive number for the year.");
		} else if(day < 0){
			console.log("Please enter a positive number for the day.");
			return alert("Please enter a positive number for the day.");
		}
	}
	catch(error){
		console.log("Please enter a positive values.");
	}
	finally{
		//calculates elapsed time between user entered date and current date
		if(currentMonth < userMonth) {
			monthsElapsed = userMonth - currentMonth;
		} else if(currentMonth > userMonth) {
			monthsElapsed = currentMonth - userMonth;
		} else {
			monthsElapsed = 0;
		}
	
		if(currentYear < userYear) {
			yearsElapsed = userYear - currentYear;
		} else if(currentYear > userYear) {
			yearsElapsed = currentYear - userYear;
		} else {
			yearsElapsed = 0;
		}
	
		if(currentDay < userDay) {
			daysElapsed = userDay - currentDay;
		} else if(currentDay > userDay) {
			daysElapsed = currentDay - userDay;
		} else {
			daysElapsed = 0;
		}
	
		//calculates elapsed time if each value are greater than or equal to zero
		if(month >= 0 && year >= 0 && day >= 0) {
		document.getElementById("enteredTime").innerHTML = "<b>" + dateObject;
		document.getElementById("elapsedTime").innerHTML = "<b><br>Months: " + monthsElapsed + 
			"<br>Days: " + daysElapsed + "<br>Years: " + yearsElapsed;	
		}
	}
}


function createEventListeners() {
	document.getElementById("desiredMonth").addEventListener("change", setDesiredDate, false);
	document.getElementById("desiredYear").addEventListener("change", setDesiredDate, false);
	document.getElementById("desiredDay").addEventListener("change", setDesiredDate, false);

	document.getElementById("currentTime").innerHTML = "<b>" + dateToday;	
}

if (window.addEventListener){
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent){
	window.attachEvent("onload", createEventListeners);
	}