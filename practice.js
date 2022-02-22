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

function handleh1Click(){
    const ClassName = "clicked";
    if(h1.className == ClassName){
        h1.className ="";
    }else{
        h1.className = ClassName
    }
}
// #3.7 CSS in Javascript part Two
h1.addEventListener("click",handleh1Click);
window.addEventListener("resize", handlwindowResize);
window.addEventListener("copy",handlewindowCopy);
window.addEventListener("cut", handlewindowCut);
window.addEventListener("paste", handlewindowPaste);