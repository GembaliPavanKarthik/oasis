const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const taskText = taskInput.value;
 
 if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
    moveTaskToCompletedList(newTask);
    });
    newTask.appendChild(completeButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
    deleteTask(newTask);
    });
    newTask.appendChild(deleteButton);
    pendingList.appendChild(newTask);
    }
    }
    
    function moveTaskToCompletedList(task) {
    pendingList.removeChild(task);
    task.removeChild(task.lastChild);
    const incompleteButton = document.createElement("button");
    incompleteButton.textContent = "Incomplete";
    incompleteButton.addEventListener("click", function() {
    moveTaskToPendingList(task);
    });
    task.appendChild(incompleteButton);
    completedList.appendChild(task);
    }
    
    function moveTaskToPendingList(task) {
    completedList.removeChild(task);
    task.removeChild(task.lastChild);
    const completeButton = document.createElement("button");
    completeButton.textContent = "delete";
    completeButton.addEventListener("click", function() {
    deleteTask(task);
    });
    task.appendChild(completeButton);
    pendingList.appendChild(task);
    }
    
    function deleteTask(task) {
    if (task.parentNode === pendingList) {
    pendingList.removeChild(task);
    }
    else if (task.parentNode === completedList) {
    completedList.removeChild(task);
    }
    }