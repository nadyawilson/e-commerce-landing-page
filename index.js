const scrollRevealLove = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

// Correct initialization of ScrollReveal library
const sr = ScrollReveal();

sr.reveal(".header-container h1", {
    ...scrollRevealLove,
});
sr.reveal(".header-container p", {
    ...scrollRevealLove,
    delay: 500,
});
sr.reveal(".header-container form", {
    ...scrollRevealLove,
    delay: 1000,
});
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});