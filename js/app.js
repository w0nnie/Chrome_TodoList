const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden" //upper case 별 의미없는 정보를 담는 변수일 때 사용
const USERNAME_KEY = "username";
const link = document.querySelector("a");

// #4.7 Super Recap 

function onLoginSubmit(event){
        const username = loginInput.value;
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY,username);
}

function handleLinckClick(event){
        console.log(event);
        event.preventDefault();
        alert("clicked!");
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorage 값이 있는지 체크해주기 위한 인자값 생성

if (savedUsername == null){ //localStorage 값 체크
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit",onLoginSubmit); 
}else{
        greeting.innerText= `Hello ${savedUsername}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click",handleLinckClick);
