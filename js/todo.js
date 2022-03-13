const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY ="todos";
let toDos = [];
//#7.8 Deleting To Dos part Three
function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function delTodo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id); //console에 찍히는 객체들의 type을 확인하기 용이할듯
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveTodos(); //지우고 다시 저장 function 호출
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