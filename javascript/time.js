"use strict"

const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const ResetButton = document.getElementById('resetButton');

let timerInterval;
let totalTime = 10 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    Minutes.textContent = String(minutes).padStart(2, '0'); //Padstart gør så der altid er 2 cifre og at foreste cifer er 0 hvis det er 1 cifer
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
    }, 1000); //1000 = den tæller ned med en hastighed af 1 "sekund" (tal skift) i sekunded
}

function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 10 * 60; 
    updateTimerDisplay();
    startTimer();
}

//Start timer
updateTimerDisplay();
startTimer();

// Reset button genstarter tid ved klik
ResetButton.addEventListener('click', resetTimer);