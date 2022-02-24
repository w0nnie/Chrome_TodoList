const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//  #4.0 Input Values
function Click(){
    if(loginInput.value == ""){
        alert("Please insert your name!")
    }else{
        console.log("hello", loginInput.value);
    }
}

loginButton.addEventListener("click",Click)