// selectors :
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todo");
// event listeners :

todoBtn.addEventListener("click" ,addTodo);
todoList.addEventListener("click" ,checkRemove);
filterOption.addEventListener("click" ,filterTodos);

// functions :
function addTodo(e){
    e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');
  const newTodo = `
  <li>${todoInput.value}</li>
  <div class="todo-icons">
    <span><i class="fa-solid fa-circle-check"></i></span>
    <span><i class="fa-solid fa-trash-can"></i></span>
  </div>`
  todoDiv.innerHTML = newTodo;
  // append to todo list :
  todoList.appendChild(todoDiv);
  todoInput.value = '';
};

function checkRemove(e){
    const classList = [...e.target.classList]
    const item = e.target
    // console.log(item.parentElement.parentElement.parentElement);
    if(classList[1] === "fa-trash-can"){
       const todo = item.parentElement.parentElement.parentElement;
       todo.remove();
    }else if(classList[1] === "fa-circle-check"){
        const todo = item.parentElement.parentElement.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodos(e){
    const todos = [...todoList.childNodes];

    todos.forEach(todo => {
        switch(e.target.value){
            case 'all' : todo.style.display = "flex";
            break;
            case 'completed':
             if (todo.classList.contains("completed")){
                todo.style.display = "flex";
             }else{
                todo.style.display = "none";
             } 
             break;
             case 'uncompleted':
             if (!todo.classList.contains("uncompleted")){
                todo.style.display = "flex";
             }else{
                todo.style.display = "none";
             } 
             break;
        }
    });
}
