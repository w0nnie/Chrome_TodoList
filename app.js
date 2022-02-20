

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
function handlwindowResize(){
    document.body.style.backgroundColor = "red";
}
function handlewindowCopy(){
    document.body.style.backgroundColor = "yellow";
    title.innerHTML = "Copy!";
}
function handlewindowCut(){
    alert("hi");
}
function handlewindowPaste(){
    alert("paste!");
}
// #3.5 More Events
title.addEventListener("click", titleClick);  //title.onclick = titleClick;
title.addEventListener("mouseenter",MouseEnter);
title.addEventListener("mouseleave",MouseLeave);
window.addEventListener("resize", handlwindowResize);
window.addEventListener("copy",handlewindowCopy);
window.addEventListener("cut", handlewindowCut);
window.addEventListener("paste", handlewindowPaste);