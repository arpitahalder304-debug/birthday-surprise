let name = "";


function startJourney() {

    name =
        document
        .getElementById("nameInput")
        .value
        .trim();


    if (name === "") {

        alert(
            "Come on 😏 Enter your name first!"
        );

        return;
    }


    document
        .getElementById("namePage")
        .classList.add("hidden");


    document
        .getElementById("loadingPage")
        .classList.remove("hidden");


    setTimeout(function () {

        document
            .getElementById("loadingPage")
            .classList.add("hidden");


        document
            .getElementById("promisePage")
            .classList.remove("hidden");


        document
            .getElementById("promiseName")
            .textContent = name;

    }, 2500);
}



function showQuiz() {

    document
        .getElementById("promisePage")
        .classList.add("hidden");


    document
        .getElementById("quizPage")
        .classList.remove("hidden");

}



function quizAnswer(answer) {

    let result =
        document.getElementById(
            "quizResult"
        );


    if (answer === "me") {

        result.innerHTML =
            "Hmm... confident answer 😏";

    }


    else if (answer === "him") {

        result.innerHTML =
            "I knew you'd say that 😂";

    }


    else {

        result.innerHTML =
            "Okay fine... I'll accept that 😂❤️";

    }


    setTimeout(function () {

        document
            .getElementById("quizPage")
            .classList.add("hidden");


        document
            .getElementById("giftPage")
            .classList.remove("hidden");

    }, 1800);
}



function openGift() {

    document
        .getElementById("giftPage")
        .classList.add("hidden");


    document
        .getElementById("finalPage")
        .classList.remove("hidden");


    document
        .getElementById("finalName")
        .textContent = name;


    createConfetti();

}



function createConfetti() {

    let symbols = [
        "✨",
        "🎉",
        "🎊",
        "❤️",
        "🥂",
        "⭐"
    ];


    for (let i = 0; i < 60; i++) {

        let piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDelay =
            Math.random() * 3 + "s";


        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 7000);

    }

}



function playMusic() {

    let music =
        document.getElementById(
            "birthdayMusic"
        );


    music.play();

}
