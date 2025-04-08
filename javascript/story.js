"use strict";

        const text = 'On the evening of September 27th, 1825, the Wrights hosted a dinner party at their mansion to celebrate the first modern railway. Guests were greeted at the door by the house cat and the butler with wine. But before the night began, a body was discovered near the kitchen porch—no blood, no sound, just silence. The murder is believed to have occurred around 18:50';

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