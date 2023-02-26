//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function information() {
	document.getElementById("browserName").innerHTML = "<b>Browser Name: </b>" + navigator.appName;
	document.getElementById("browserVersion").innerHTML = "<b>Browser Version: </b>" + navigator.appVersion;
	document.getElementById("platform").innerHTML = "<b>Operating Platform: </b>" + navigator.platform;
	document.getElementById("connection").innerHTML = "<b>Internet Connection: </b>" + navigator.onLine;
	document.getElementById("height").innerHTML = "<b>Screen Height: </b>" + navigator.height;
	document.getElementById("width").innerHTML = "<b>Screen Width: </b>" + navigator.width;
}

information()