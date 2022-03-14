//get DOM elements
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");
const removeBtn = document.getElementById("clear-all");

// Side Effects / Lifecycle
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todoDataList = [];
existingTodos.forEach((todo) => {
  addTodoListItem(todo);
});

// Function that adds to local Storage
function addTodoListItem(todoText) {
  if (todoText) {
    todoDataList.push(todoText);
    const li = document.createElement("li");
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem("todos", JSON.stringify(todoDataList));
  }
}

function removeTodoListItem() {
  todoDataList.pop();
  todoList.removeChild(todoList.lastElementChild);
  localStorage.setItem("todos", JSON.stringify(todoDataList));
}

// Events
form.onsubmit = (event) => {
  event.preventDefault();
  addTodoListItem(input.value);
};

removeBtn.addEventListener("click", removeTodoListItem);
