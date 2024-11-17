// Loading Animation
window.onload = function () {
    const loadingSpinner = document.querySelector('.loading-spinner');
    loadingSpinner.style.display = 'none';
};

// Task Completion Logic
const tasks = document.querySelectorAll('.task input');
const progressBar = document.querySelector('.progress-bar .progress');

tasks.forEach(task => {
    task.addEventListener('change', updateProgress);
});

function updateProgress() {
    const totalTasks = tasks.length;
    const completedTasks = Array.from(tasks).filter(task => task.checked).length;
    const percentage = (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${Math.round(percentage)}%`;
}

// Poll Voting
const pollOptions = document.querySelectorAll('.poll-option');
let pollVoted = false;

pollOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (pollVoted) return;
        pollVoted = true;
        option.classList.add('voted');
        setTimeout(() => alert('Thank you for voting! Results will be revealed later.'), 500);
    });
});

// Medal Ranking Logic
const ranks = [
    { name: 'Ali Sheikh', score: 95 },
    { name: 'Sahil Jaiswal', score: 90 },
    { name: 'Anvesha Gupta', score: 85 },
];

const rankContainer = document.querySelector('.rank-medals');

ranks.sort((a, b) => b.score - a.score);

const medals = ['gold', 'silver', 'bronze'];
ranks.forEach((rank, index) => {
    const medalDiv = document.createElement('div');
    medalDiv.classList.add('medal', medals[index]);
    medalDiv.textContent = `${rank.name}`;
    rankContainer.appendChild(medalDiv);
});
