const images = [
  "images/hero-image.jpg",
  "images/hero-image.jpg",
  "images/hero-image.jpg"
];

let current = 0;
const slider = document.querySelector(".slider");
let currentImg = document.getElementById("slider-img");

document.getElementById("next").addEventListener("click", () => {
  slideImage(1);
});

document.getElementById("prev").addEventListener("click", () => {
  slideImage(-1);
});

function slideImage(direction) {
  const nextIndex = (current + direction + images.length) % images.length;

  const newImg = document.createElement("img");
  newImg.src = images[nextIndex];
  newImg.style.transform = `translateX(${direction > 0 ? "100%" : "-100%"})`;
  slider.appendChild(newImg);

  requestAnimationFrame(() => {
    currentImg.style.transform = `translateX(${direction > 0 ? "-100%" : "100%"})`;
    newImg.style.transform = "translateX(0)";
  });

  newImg.addEventListener("transitionend", () => {
    currentImg.remove();
    currentImg = newImg;
  });

  current = nextIndex;
}