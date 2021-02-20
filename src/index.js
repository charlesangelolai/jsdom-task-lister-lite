document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = (e) => {
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();
};

const appendNewTask = (t) => {
  document.getElementById("tasks").appendChild(t);
};
