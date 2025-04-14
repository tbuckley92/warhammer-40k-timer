let timeLeft = 30 * 60; // 30 minutes in seconds
let timerInterval;
let isRunning = false;
let currentPlayer = 1;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const player1Display = document.getElementById('player1');
const player2Display = document.getElementById('player2');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                switchPlayer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 30 * 60;
    updateTimerDisplay();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    timeLeft = 30 * 60;
    updateTimerDisplay();
    
    if (currentPlayer === 1) {
        player1Display.classList.add('active');
        player2Display.classList.remove('active');
    } else {
        player1Display.classList.remove('active');
        player2Display.classList.add('active');
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the display
updateTimerDisplay(); 