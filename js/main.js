function ready(){
    setTimeout(open, 5000);
    
}

function open(){
    var pop=document.querySelector(".popup-container");
    pop.style.display="block";
}

function exit(){
    var pop=document.querySelector(".popup-container");
    pop.style.display="none";
}

document.addEventListener("DOMContentLoaded", ready);