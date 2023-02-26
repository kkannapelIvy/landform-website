//calculates area from user entered length and width
function calcArea() {
	var length = document.getElementById("length");
	var width = document.getElementById("width");
	var totalArea = 0;
	
	//checks if length or width are negative
	if (length.value < 0) {
		return alert("Please enter a positive number for Length.");
	} else if (width.value < 0) {
		return alert("Please enter a positive number for Width.");	
	} else {
		totalArea = length.value * width.value;
		document.getElementById("area").innerHTML = totalArea + "ft";	
	}
}


function createEventListeners() {
	document.getElementById("length").addEventListener("change", calcArea, false);
	document.getElementById("width").addEventListener("change", calcArea, false);
}

 //sets all form field values to default
 function resetForm() {
	 document.getElementById("length").value = 1;
	 document.getElementById("width").value = 1;
	 calcArea();
	 createEventListeners();
}

//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//resets form when page is reloaded
document.addEventListener("load", resetForm, false);

createEventListeners()