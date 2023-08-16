// Vidéo bannière

var video = document.getElementById("background-video");

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});
