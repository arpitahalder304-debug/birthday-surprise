function nextStep(currentStep) {

    document.getElementById("step" + currentStep).style.display = "none";

    document.getElementById("step" + (currentStep + 1)).style.display = "flex";

}


function openGift() {

    document.getElementById("step4").style.display = "none";

    document.getElementById("finalPage").style.display = "flex";

    createConfetti();

    createBalloons();

}


function createConfetti() {

    let symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "🎈",
        "⭐",
        "🥳",
        "🎂"
    ];

    for (let i = 0; i < 50; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 4 + "s";

        confetti.style.fontSize =
            (18 + Math.random() * 18) + "px";

        document.body.appendChild(confetti);

    }

}


function createBalloons() {

    let balloons = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];

    balloons.forEach(function (balloon, index) {

        let element = document.createElement("div");

        element.className = "balloon";

        element.innerHTML = balloon;

        element.style.left =
            (index * 20 + 5) + "%";

        element.style.animationDelay =
            (index * 0.8) + "s";

        document.body.appendChild(element);

    });

}


function playMusic() {

    let music =
        document.getElementById("birthdayMusic");

    music.volume = 0.5;

    music.play()
        .then(function () {

            console.log("Music started");

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });

}
