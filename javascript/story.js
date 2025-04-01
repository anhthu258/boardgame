"use strict";

const text = `It’s the 27th of september 1825, the Wrights invited their closes friends to their mansion for a dinner party to celebrate the very first modern railway. Once every guest arrived they met the house cat, which greeted them at the door. Beside the cat is the butler, who stands ready with the welcoming wine.

There has been a murder, and the detective concludes the time of murder to be around 18:50, and the body was found around the porch beside the kitchen. 

`;

let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 50);
    } else {
        // Efter den er færdig med at skrive, så kommer der gyser tekst frem
        setTimeout(() => {
            document.getElementById("horror-text").style.opacity = 1;
        }, 2000);
    }
}

window.onload = typeText;