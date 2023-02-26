//hides and unhides other page tabs when hamburger menu is clicked
function dropDownMenu() {
  var x = document.getElementById("pagelinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}