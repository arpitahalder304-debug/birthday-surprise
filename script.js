let name = "";

function startBirthday() {

    name = document.getElementById("nameInput").value.trim();

    if (name === "") {

        alert("Please enter your name 😊");

        return;
    }

    document.getElementById("namePage").style.display = "none";

    document.getElementById("loadingPage").style.display = "flex";

    setTimeout(function () {

        document.getElementById("loadingPage").style.display = "none";

        document.getElementById("birthdayPage").style.display = "flex";

        document.getElementById("userName").innerHTML = name;

        createBalloons();

    }, 2500);
}


function openGift() {

    document.getElementById("birthdayPage").style.display = "none";

    document.getElementById("surprisePage").style.display = "flex";

    document.getElementById("finalName").innerHTML = name;

    createConfetti();
}


function createBalloons() {

    let balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

    balloons.forEach(function (balloon, index) {

        let element = document.createElement("div");

        element.className = "balloon";

        element.innerHTML = balloon;

        element.style.left = (index * 20 + 5) + "%";

        element.style.animationDelay = (index * 0.8) + "s";

        document.body.appendChild(element);

    });
}


function createConfetti() {

    let symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "🎈",
        "⭐",
        "🥳"
    ];

    for (let i = 0; i < 40; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 3 + "s";

        document.body.appendChild(confetti);
    }
}


function playMusic() {

    let music = document.getElementById("birthdayMusic");

    music.play();

}

