const ul = document.querySelector(".navbar-main-ul");
const burger_menu = document.querySelector(".burger-menu");

burger_menu.addEventListener(
    "click",
    (event) => {
        ul.classList.toggle("hide-burger-menu");
        event.stopPropagation();
    }
);

window.addEventListener(
    "click",
    () => {
        ul.classList.add("hide-burger-menu");
    }
);

// sticky navbar
// Select the header and nav elements
const header = document.querySelector('header');
const nav = document.querySelector('nav');

// Function to toggle the sticky class
function toggleStickyNav() {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.onscroll = toggleStickyNav;




/* scroling function*/
document.addEventListener('DOMContentLoaded', function () {
    const achievements = document.querySelectorAll('#achieveandinterest');

    achievements.forEach(achievement => {
        achievement.addEventListener('click', function () {
            event.preventDefault();
            // Adjust the offset value based on your layout
            const offset = elmnt.offset
            const target = this.getAttribute('href');
            const targetElement = document.querySelector(target);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});