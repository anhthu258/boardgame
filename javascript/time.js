const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const ResetButton = document.getElementById('resetButton');

let timerInterval;
let totalTime = 1 * 6; // 10 minuter

//finder den gemte tid i local storage
const savedEndTime = localStorage.getItem('endTime');
if (savedEndTime) {
    const currentTime = Date.now();
    const endTime = parseInt(savedEndTime, 10);
    const remainingTime = Math.floor((endTime - currentTime) / 1000);

    if (remainingTime > 0) {
        totalTime = remainingTime; 
    } else {
        localStorage.removeItem('endTime'); 
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    Minutes.textContent = String(minutes).padStart(2, '0'); //Padstart gør så der altid er 2 cifre og at foreste cifer er 0 hvis det er 1 cifer
    Seconds.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    const endTime = Date.now() + totalTime * 1000; // Udregner hvor meget tid er tilbage
    localStorage.setItem('endTime', endTime);

    timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = Math.floor((endTime - currentTime) / 1000);

        if (remainingTime > 0) {
            totalTime = remainingTime;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            localStorage.removeItem('endTime'); //når uret løber ud fjerner du endtime fra det gemte
            totalTime = 0;
            updateTimerDisplay();
            const alertSound = new Audio('/music/evil-laugh-89423.mp3'); // afspiller evil laugh lyden når tiden er gået ud
            alertSound.play();
            gameOverScreen(); // game over skærmen
        }
    }, 1000); //1000 = den tæller ned med en hastighed af 1 "sekund" (tal skift) i sekunded
}

function gameOverScreen() { // Game over skræm, når tiden er gået ud
    const gameOverScreen = document.createElement('div');
    gameOverScreen.style.position = 'fixed';
    gameOverScreen.style.top = '0';
    gameOverScreen.style.left = '0';
    gameOverScreen.style.width = '100%';
    gameOverScreen.style.height = '100%';
    gameOverScreen.style.backgroundColor = 'black';
    gameOverScreen.style.color = 'white';
    gameOverScreen.style.display = 'flex';
    gameOverScreen.style.justifyContent = 'center';
    gameOverScreen.style.alignItems = 'center';
    gameOverScreen.style.fontSize = '5rem';
    gameOverScreen.style.zIndex = '999';
    gameOverScreen.id = 'gameOverScreen'; 
    gameOverScreen.textContent = 'The killer got away...';

    // Append the overlay to the body
    document.body.appendChild(gameOverScreen);
}

// Start timer
updateTimerDisplay();
startTimer();

// Reset button genstarter tid ved klik
ResetButton.addEventListener('click', resetTimer);

function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 1 * 6;
    updateTimerDisplay();
    startTimer();
}