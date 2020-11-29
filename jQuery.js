setTimeout(() => {  
var conta = document.getElementsByClassName("chivecc");
var i;

for (i = 0; i < 3; i++) {
  conta[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var x = this.nextElementSibling;
    if (x.style.display === "block"){
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });
} }, 200);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  setTimeout(() => {  
var x = document.getElementById("hamburgerNav");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}, 200);
}