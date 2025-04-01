"use strict";

        const text = `​It’s the 27th of September 1825, the Wrights invited their closest friends to their mansion for a dinner party to celebrate the very first modern railway. Once every guest arrived, they met the house cat, which greeted them at the door. Beside the cat is the butler, who stands ready with the welcoming wine. But, there has been a murder. The detective concludes the time of murder to be around 18:50. The body was found around the porch beside the kitchen.`;

        let i = 0;
        let isTyping = false;
        let typingPaused = false;
        let typingTimeout;

        function typeText() {
            if (i < text.length && !typingPaused) {
                document.getElementById("typing-text").innerHTML += text.charAt(i);
                i++;
                typingTimeout = setTimeout(typeText, 74);
            } else if (i >= text.length) {
                setTimeout(() => {
                    document.getElementById("horror-text").style.opacity = 1;
                }, 2000);
            }
        }

        let theSong = document.getElementById("song");
        let logo = document.getElementById("logo");

        logo.onclick = function () {
            if (theSong.paused) {
                theSong.play();
                logo.src = "/img/pause.png";

                if (!isTyping) { 
                    isTyping = true;
                    typeText();
                } else {
                    typingPaused = false;
                    typeText(); // Resume typing
                }

            } else {
                theSong.pause();
                logo.src = "/img/play.png";
                typingPaused = true;
                clearTimeout(typingTimeout); // Stop the typing effect
            }
        };