
// Task 1 
let text = "Hi My Name is Nandinee";
document.getElementById("Trial").innerHTML = text.length;

// Task 1
let str = "Megan, Shiven, Lucy";
document.getElementById("Trial_2").innerHTML = str.slice(7,13); 

// Task 2
var brands = [" Dior", " Chanel", " Louis Vuitton", " Prada"];
document.getElementById("Trial_3").innerHTML = brands.toString();

let x = 1234;
document.getElementById("Trial_4").innerHTML =
  x.toString() + "<br>" +
   (1234).toString() + "<br>" +
   (100 + 1134).toString();



   function newFunction() {
    var d = new Date();
    var n = d.getTime();
    document.getElementById("Trial_5").innerHTML = n;
    
}

// Task 3 
function myFunction() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("Trial_6").innerHTML = n;
  }



