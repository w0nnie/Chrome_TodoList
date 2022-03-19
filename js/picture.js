const picture = document.querySelector(".input-file-button");
const PICTURE_VALUE = document.querySelector("#input-file");

function uploadPicutre(event){
    console.log("hi");
    console.log(PICTURE_VALUE);
}
picture.addEventListener("click",uploadPicutre);