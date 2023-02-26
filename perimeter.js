//calculates perimeter from user entered length and width
function calcPerimeter() {
	var length = document.getElementById("length");
	var width = document.getElementById("width");
	var totalPerimeter = 0;
	
	try{
	//checks if length or width are negative
	if (length.value < 0) {
		console.log("Please enter a positive number for length.");
		return alert("Please enter a positive number for length.");
		} else if(width.value < 0){
			console.log("Please enter a positive number for width.");
			return alert("Please enter a positive number for Width.")
		}			
	}
	catch(error){
		console.log("Please enter a positive number.");	
	}
	finally{
		totalPerimeter = (2 * length.value) + (2 * width.value);
		document.getElementById("perimeter").innerHTML = totalPerimeter + "ft";	
	}
}


function createEventListeners() {
	document.getElementById("length").addEventListener("change", calcPerimeter, false);
	document.getElementById("width").addEventListener("change", calcPerimeter, false);
}

 //sets all form field values to default
 function resetForm() {
	 document.getElementById("length").value = 1;
	 document.getElementById("width").value = 1;
	 calcPerimeter();
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