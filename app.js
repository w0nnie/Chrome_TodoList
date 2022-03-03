const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden" //upper case 별 의미없는 정보를 담는 변수일 때 사용
const link = document.querySelector("a");

// #4.5 Saving Username

function Click(event){
        event.preventDefault();sss
        const username = loginInput.value;
        const username1 = "hi";
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem("username",username);
        greeting.innerText= "Hello " + username;
        greeting.innerText= `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
 
        console.log(username);
}

function handleLinckClick(event){
        console.log(event);
        event.preventDefault();
        alert("clicked!");
}

loginForm.addEventListener("submit",Click); 
link.addEventListener("click",handleLinckClick);
