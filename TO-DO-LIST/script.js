document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        
        // Add buttons for completion and deletion
        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.classList.add("complete-button");
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");

        // Event listener to mark task as completed
        completeButton.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Event listener to delete the task
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // Append buttons to the task
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        return li;
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
