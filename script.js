//get DOM elements
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");
const removeBtn = document.getElementById("clear-all");

// Side Effects / Lifecycle
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todoDataList = [];
existingTodos.forEach((todo) => {
  addTodo(todo);
});

// Function that adds to local Storage
function addTodo(todoText) {
  todoDataList.push(todoText);
  const li = document.createElement("li");
  li.innerHTML = todoText;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoDataList));
}

function removeTodoListItem() {
  todoList.removeChild(todoList.lastElementChild);
  // localStorage.removeItem("todos", JSON.stringify(todoDataList));

  // alert("You Cleared all of the Tasks in this ToDo List");
}

// Events
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
};

removeBtn.addEventListener("click", removeTodoListItem);
