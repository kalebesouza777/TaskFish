document.addEventListener("DOMContentLoaded", function() {
    renderTasks();
    document.getElementById("task-form").addEventListener("submit", handleTaskFormSubmit);
    document.getElementById("sort-selector").addEventListener("change", handleSortChange);
});

let tasks = [];

function handleTaskFormSubmit(event) {
    event.preventDefault();
    const task = document.getElementById("task").value;
    const dueDate = document.getElementById("due-date").value;
    addTask(task, dueDate);
    document.getElementById("task").value = "";
    document.getElementById("due-date").value = "";
}

function addTask(task, dueDate) {
    const id = tasks.length + 1;
    tasks.push({ id, task, dueDate });
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${task.task} - ${task.dueDate}`;
        taskList.appendChild(taskItem);
    });
}

function handleSortChange() {
    const sortOption = document.getElementById("sort-selector").value;
    if (sortOption === "due-date") {
        sortByDueDate();
    } else if (sortOption === "addition-order") {
        sortByAdditionOrder();
    }
}

function sortByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    renderTasks();
}

function sortByAdditionOrder() {
    tasks.sort((a, b) => a.id - b.id);
    renderTasks();
}
