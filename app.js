

// #3.4 practice
const title = document.querySelector(".hello h1");

title.innerHTML ="HELLo";

function titleClick(){
    title.style.color = "blue";
    title.innerHTML = "Click Hello";
}
function MouseEnter(){
    title.style.color = "red";
    title.innerHTML = "Mouse is here!";
}
function MouseLeave(){
    title.style.color = "black";
    title.innerHTML = "Mouse is gone!";
}

title.addEventListener("click", titleClick);
title.addEventListener("mouseenter",MouseEnter);
title.addEventListener("mouseleave",MouseLeave);