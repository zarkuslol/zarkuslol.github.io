// Nome no título
var i = 0;
var text = "José Lucas.";
var speed = 150;

function type() {
    document.querySelector(".name-title").innerHTML += text.charAt(i);
    i++;

    setTimeout(type, speed);
}

type();

// Fade
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
