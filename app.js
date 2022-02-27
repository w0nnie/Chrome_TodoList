const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");

// #4.3 Events part Two 
function Click(){
        const username = loginInput.value;
        console.log(username);
}

function handleLinckClick(event){
        console.log(event);
        event.preventDefault();
        alert("clicked!");
}

loginForm.addEventListener("submit",Click); 
link.addEventListener("click",handleLinckClick);