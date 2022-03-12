const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY ="todos";
let toDos = [];
//#7.6 Deleting To Dos part One
function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function delTodo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function printTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    printTodo(newTodoObj);
    saveTodos();
}
toDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(printTodo); // forEach는 printTodo를 parsedTodos 배열의 요소마다 실행한다.
}

//filter function 은 항상 true를 리턴해야한다 (?)
function sexyFilter(){

}