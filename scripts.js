document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    const closeMobileMenu = document.getElementById("closeMobileMenu");
    const header = document.getElementById("mainHeader");

    mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    });

    closeMobileMenu.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
    });

    overlay.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 80) {
            header.classList.add("shadow-lg", "py-5");
            header.classList.remove("py-6");
        } else {
            header.classList.remove("shadow-lg", "py-5");
            header.classList.add("py-6");
        }
    });

});
// Simple carousel logic
const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3"
];
let current = 0;
const imgEl = document.getElementById("carouselImage");
document.getElementById("prevBtn").onclick = function () {
    current = (current - 1 + images.length) % images.length;
    imgEl.src = images[current];
};
document.getElementById("nextBtn").onclick = function () {
    current = (current + 1) % images.length;
    imgEl.src = images[current];
};

// show video for file muscle html change video by click different video
function showVideo(muscle) {
    const videoMap = {
        chest: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ganti dengan video chest
        back: "https://www.youtube.com/embed/oHg5SJYRHA0", // ganti dengan video back
        leg: "https://www.youtube.com/embed/YbJOTdZBX1g" // ganti dengan video leg
    };
    const iframe = document.getElementById("muscleVideo");
    iframe.src = videoMap[muscle];
}