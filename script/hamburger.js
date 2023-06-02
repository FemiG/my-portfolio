/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function burger() {
    var x = document.getElementById("MyMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
    console.log("Donuts")
  }

burger()