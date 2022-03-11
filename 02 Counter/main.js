let counterNumber = document.getElementById("counterNumber").innerHTML;
let number = 0;
let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");
let increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener('click', function(){
    --number;
    document.getElementById("counterNumber").innerHTML = number;
    console.log(number)
    });

resetBtn.addEventListener('click', function(){
    number = 0;
    document.getElementById("counterNumber").innerHTML = number;
    console.log(number)
    });

increaseBtn.addEventListener('click', function(){
    ++number
    document.getElementById("counterNumber").innerHTML = number;
    console.log(number)
    });





/* 
- document.querySelectorAll()
- forEach()
- addEventListener()
- currentTarget property
- classList
- textContent

*/