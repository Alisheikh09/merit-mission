// Countdown Timer
function updateCountdown() {
    const boardExamDate = new Date("2025-02-15T00:00:00");
    const now = new Date();
    const diff = boardExamDate - now;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("countdown").innerText = `${months} months, ${days} days, ${hours} hours`;
}
setInterval(updateCountdown, 1000);

// Navigation
function navigate(page) {
    window.location.href = page;
}

// To-Do List Functionality
let tasks = [];
let completedTasks = 0;

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value) {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskInput.value;

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
            completedTasks = document.querySelectorAll("#task-list .completed").length;
            updateCompletionPercentage();
        });

        taskList.appendChild(taskItem);
        tasks.push(taskInput.value);
        taskInput.value = "";
        updateCompletionPercentage();
    }
}

function updateCompletionPercentage() {
    const percentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
    document.getElementById("completion-percentage").innerText = `Completion: ${percentage.toFixed(1)}%`;
}

// Session Timing
function markAttendance() {
    const sessionDate = document.getElementById("session-date").value;

    if (sessionDate) {
        alert(`Attendance marked for session on ${sessionDate}`);
    } else {
        alert("Please select a session date before marking attendance!");
    }
}
