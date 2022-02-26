const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//  #4.1 #4.1 Form Submission 
function Click(){
        const username = loginInput.value;
        console.log(username);
}

loginButton.addEventListener("click",Click)