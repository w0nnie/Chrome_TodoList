const h1 = document.querySelector(".hello h1");

h1.innerHTML ="HELLo";

function handlwindowResize(){
    document.body.style.backgroundColor = "red";
}
function handlewindowCopy(){
    document.body.style.backgroundColor = "yellow";
    h1.innerHTML = "Copy!";
}
function handlewindowCut(){
    alert("hi");
}
function handlewindowPaste(){
    alert("paste!");
}
//#3.8 CSS in Javascript part Three  classList & toggle
function handleh1Click(){
   h1.classList.toggle("clicked");
}
// #3.7 CSS in Javascript part Two
h1.addEventListener("click",handleh1Click);
window.addEventListener("resize", handlwindowResize);
window.addEventListener("copy",handlewindowCopy);
window.addEventListener("cut", handlewindowCut);
window.addEventListener("paste", handlewindowPaste);