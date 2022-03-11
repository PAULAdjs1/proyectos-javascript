let myArrayColor = ["Blue", "Pink", "Yellow", "Orange", "Red", "Green", "Purple"]
let max = myArrayColor.length;
let aleatorio = Math.floor(Math.random() * max);
  
const element = document.getElementById("changeBackground");
element.addEventListener("click", myColor);

function myColor() {
    aleatorio = Math.floor(Math.random() * max);
    let element = document.getElementById("myID");
    element.style.backgroundColor= myArrayColor[aleatorio];
    document.getElementById("print").innerHTML= myArrayColor[aleatorio];
}
