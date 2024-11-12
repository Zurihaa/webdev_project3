const images = ["city1.jpg", "city2.jpg", "city3.jpg"];
let currentIndex = 0;

function showSlide(index) {
  document.getElementById("slide").src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
