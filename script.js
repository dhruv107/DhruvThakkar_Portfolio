// ================================
// TYPING ANIMATION
// ================================

const roles = [
    "CSE Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Digital Creator",
];

let ri = 0;
let ci = 0;
let del = false;

const typing = document.getElementById("typing");

function type() {

    const word = roles[ri];

    typing.textContent = word.slice(0, ci);

    if (!del && ci < word.length) {

        ci++;

        setTimeout(type, 85);

    } else if (!del) {

        del = true;

        setTimeout(type, 1300);

    } else if (ci > 0) {

        ci--;

        setTimeout(type, 45);

    } else {

        del = false;

        ri = (ri + 1) % roles.length;

        setTimeout(type, 300);
    }
}

type();


// ================================
// SCROLL REVEAL
// ================================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


// ================================
// FOOTER YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================================
// PROFILE PHOTO
// ================================

const myPhoto = document.getElementById("myPhoto");

const placeholder =
    document.querySelector(".placeholder");


myPhoto.onload = () => {

    myPhoto.style.display = "block";

    placeholder.style.display = "none";

};


// ================================
// MOBILE MENU
// ================================

const menuBtn =
    document.getElementById("menuBtn");

const navlinks =
    document.querySelector(".navlinks");


menuBtn.addEventListener("click", () => {

    if (navlinks.style.display === "flex") {

        navlinks.style.display = "none";

    } else {

        navlinks.style.display = "flex";

    }

});