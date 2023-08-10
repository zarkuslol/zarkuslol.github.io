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

// Carrega idade automaticamente
function calculateAge(year, month, day) {
    var d = new Date();

    var actualYear = d.getFullYear();
    var actualMonth = d.getMonth() + 1;
    var actualDay = d.getDay();

    var totalAge = actualYear - year;

    if (actualMonth < month || actualMonth == month && actualDay < day) {
        totalAge--;
    }

    return totalAge < 0 ? 0 : totalAge;
}

window.onload = () => {
    var ageSpan = document.querySelector(".age");
    var age = calculateAge(2003, 5, 3);
    ageSpan.textContent = age;
}
