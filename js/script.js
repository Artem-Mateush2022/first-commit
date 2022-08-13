const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

// Method 1

todoForm.addEventListener("submit", formHeandler);

/*function formHeandler (event) {
    event.preventDefault();

    const taskText = todoInput.value;
    const li = `<li>${taskText}</li>`;

    todoList.insertAdjacentHTML("beforeend", li);
    todoInput.value = '';
    todoInput.focus();
}*/

function formHeandler (event) {
    event.preventDefault();
    const taskText = todoInput.value;

    const newTask = document.createElement("li");
    newTask.innerText = taskText;
    todoList.append(newTask);

    const delButton = document.createElement("button");
    delButton.setAttribute("role", "button");
    delButton.innerText = "X";
    delButton.style["margin-left"] = "15px";
    newTask.append(delButton);

    delButton.addEventListener("click", function () {
        this.closest("li").remove();
    })


    todoInput.value = '';
    todoInput.focus();
}