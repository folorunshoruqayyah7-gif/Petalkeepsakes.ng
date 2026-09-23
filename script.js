const carousel = document.getElementById("carousel");

const images = [
  "WhatsApp Image 2026-09-22 at 12.22.58.jpeg",
  "WhatsApp Image 2026-09-22 at 12.22.55.jpeg",
  "WhatsApp Image 2026-09-22 at 12.22.59.jpeg"
];

let currentIndex = 0;

setInterval(() => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  carousel.src = images[currentIndex];
}, 3000);

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.textContent === "Add to Cart") {
      button.textContent = "Added ✓";
    } else {
      button.textContent = "Add to Cart";
    }

  });
});