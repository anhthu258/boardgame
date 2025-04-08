const knifeLink = document.getElementById('clue1');
const flinkLink = document.getElementById('clue2');
const candleLink = document.getElementById('clue3');
const ropeLink = document.getElementById('clue4');
const bustLink = document.getElementById('clue5');
const dipLink = document.getElementById('clue6');
const musketLink = document.getElementById('clue7');
const paperLink = document.getElementById('clue8');
const wineLink = document.getElementById('clue9');
const poisonLink = document.getElementById('clue10');


// Knife Link med password
knifeLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarKniv = "1";

    if (password === rigtigtSvarKniv) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/knifeclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Flint Link med password
flinkLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarFlint = "2";

    if (password === rigtigtSvarFlint) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/flintclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Candle Link med password
candleLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarStearin = "3";

    if (password === rigtigtSvarStearin) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/candleclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Rope Link med password
ropeLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarSnor = "4";

    if (password === rigtigtSvarSnor) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/ropeclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Bust Link med password
bustLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarBuste = "5";

    if (password === rigtigtSvarBuste) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/bustclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Dip Link med password
dipLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarDip = "6";

    if (password === rigtigtSvarDip) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/dipclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Musket Link med password
musketLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarMusket = "7";

    if (password === rigtigtSvarMusket) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/musketclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Paper Link med password
paperLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarPapir = "8";

    if (password === rigtigtSvarPapir) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/paperclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Wine Link med password
wineLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarVin = "9";

    if (password === rigtigtSvarVin) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/wineclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});

// Poison Link med password
poisonLink.addEventListener('click', (event) => {
    event.preventDefault(); //gør så du ikke bliver taget til siden før alert
    const password = prompt("Hvad er dit svar?");
    const rigtigtSvarGift = "10";

    if (password === rigtigtSvarGift) {
        alert("Well done... One step close to the truth.");
        window.location.href = "/html/clues/poisonclue.html";
    } else {
        alert("Wrong... Hurry, time is running out.");
        window.location.href = "/html/clues.html";
    }
});
