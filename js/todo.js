const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// #7.2 Deleting To Dos 
function delTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function printTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click",delTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    printTodo(newTodo);
}
toDoForm.addEventListener("submit",handleTodoSubmit);
