document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteTask">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            
            const deleteButton = listItem.querySelector(".deleteTask");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });

    
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
