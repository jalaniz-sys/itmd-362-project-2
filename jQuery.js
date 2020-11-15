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
      x.style.display = "block";;
    }
  });
} }, 200);
