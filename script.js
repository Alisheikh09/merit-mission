// Loader
window.onload = () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
  }, 3000);
};

// Countdown Timer for Board Exams
const boardTimer = document.getElementById('board-timer');
function updateBoardTimer() {
  const eventDate = new Date('2025-02-15T00:00:00');
  const now = new Date();
  const diff = eventDate - now;

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  boardTimer.innerHTML = `<p>${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes</p>`;
}
setInterval(updateBoardTimer, 1000);

// Tapasya Page Navigation
function goToTapasyaPage() {
  document.querySelector('.main-container').style.display = 'none';
  document.getElementById('tapasya-page').classList.remove('hidden');
}

function goBack() {
  document.getElementById('tapasya-page').classList.add('hidden');
  document.querySelector('.main-container').style.display = 'block';
}

// Timer in Tapasya Mode
let timerInterval;
let sessionCount = 0;
function startSession() {
  let minutes = 25;
  let seconds = 0;
  updateTimerText(minutes, seconds);

  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        sessionCount++;
        document.getElementById('session-count').innerText = sessionCount;
        clearInterval(timerInterval);
        alert('Session Complete!');
        if (sessionCount === 4) alert('All 4 sessions complete!');
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateTimerText(minutes, seconds);
  }, 1000);
}

function resetSession() {
  clearInterval(timerInterval);
  sessionCount = 0;
  document.getElementById('session-count').innerText = sessionCount;
  updateTimerText(25, 0);
}

function updateTimerText(minutes, seconds) {
  const timerText = document.getElementById('timer-text');
  timerText.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
