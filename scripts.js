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
        chest: "/videos/muscle-chest.mp4", 
        back: "/videos/muscle-back.mp4", 
        leg: "/videos/muscle-leg.mp4" 
    };
    const iframe = document.getElementById("muscleVideo");
    iframe.src = videoMap[muscle];
}

  const vid = document.getElementById("myvid");
  const progressbar = document.getElementById("pg");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");

  function playPause() {
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }

  function mute() {
    vid.muted = !vid.muted;
  }

  function vidVol() {
    vid.volume = vid.volume === 1.0 ? 0.5 : 1.0;
  }

  vid.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(vid.duration);
  });

  vid.addEventListener("timeupdate", () => {
    const pos = vid.currentTime / vid.duration;
    progressbar.style.width = pos * 100 + "%";
    currentTimeEl.textContent = formatTime(vid.currentTime);
  });

  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }