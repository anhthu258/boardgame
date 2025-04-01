"use strict"

const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const ResetButton = document.getElementById('resetButton');

let timerInterval;
let totalTime = 10 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    Minutes.textContent = String(minutes).padStart(2, '0');
    Seconds.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (totalTime > 0) {
            totalTime--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Initialize the timer display and start the timer
updateTimerDisplay();
startTimer();