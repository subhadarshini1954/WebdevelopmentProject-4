// Logic for Date and Time ************************
const date = document.getElementById('date');
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

let currentDate = new Date();
date.innerHTML += currentDate.toJSON().slice(0, 10);

// Logic for to-do-app ***************************
const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");


function addTask() {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === "") {
        alert("Please write a task!!!")
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML =  inputBox.value;
        newTask.classList.add("slide-fade", "show"); 
        taskContainer.appendChild(newTask);
        let editBtn = document.createElement("i");
        editBtn.className = "fa fa-solid fa-pen edit-btn";
        newTask.appendChild(editBtn);
        let deleteBtn = document.createElement("span");
        deleteBtn.className = "fa fa-solid fa-trash delete-btn";
        newTask.appendChild(deleteBtn);   
    }
    inputBox.value = "";
    saveData();
}
inputBox.addEventListener("keydown", function (e) {    
    if (e.key === "Enter") {       
        e.preventDefault();   
        addTask();
    }
});
function editTask(taskElement) {
    const currentText = taskElement.innerText;
    const newText = prompt('Edit task:', currentText);

    if (newText !== null && newText.trim() !== "") {       
        taskElement.innerHTML = `${newText.trim()}
            <i class="fa fa-solid fa-pen edit-btn"></i>
            <span class="fa fa-solid fa-trash delete-btn"></span>`;           
    } else {
        alert('Edit task cancelled or empty text entered.');
    }
}
taskContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I" && e.target.classList.contains("edit-btn")) {
        // If the clicked element is an edit icon, call the editTask function
        editTask(e.target.parentElement);
        saveData();
    } else if (e.target.tagName === "SPAN" && e.target.classList.contains("delete-btn")) {
        // If the clicked element is a delete icon, remove the parent element
        const parentLi = e.target.parentElement;
        parentLi.classList.remove("show"); // Remove the 'show' class to initiate the slide-fade out effect
        setTimeout(function () {
            parentLi.remove();
            saveData();
        }, 10);
        saveData();
    } else if (e.target.tagName === "LI") {
        // If the clicked element is an LI, toggle the completed class
        e.target.classList.toggle("completed");
        saveData();
    }
});


function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}
function showData() {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showData();