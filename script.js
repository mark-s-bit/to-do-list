document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTskbtn = document.getElementById("add-tsk-btn");
  const taskListed = document.getElementById("task-listed");

  const addTask = (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) {
      return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
    <input type = "checkbox" class="checkbox" 
     >`
    li.textContent = taskText;
    taskListed.appendChild(li);
    taskInput.value = "";
  };
  addTskbtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask(e);
    }
  });
});
