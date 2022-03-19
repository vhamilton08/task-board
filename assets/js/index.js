const addTaskBtnEl = document.querySelector('#add-task');
const tasksToDoEl = document.querySelector("#tasks-to-do");

const addTask = () => {
    const taskItemEl = document.createElement("li");
    taskItemEl.textContent = 'hello there';
    taskItemEl.classList.add("list-item");
    tasksToDoEl.appendChild(taskItemEl);
}
addTaskBtnEl.addEventListener("click", addTask)