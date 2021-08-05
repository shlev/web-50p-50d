const images = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.getElementById('carousel');
images.forEach((imgEl, idx) => imgEl.left = `${idx*100}%`);

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

let currentImg = 1;

rotateCarousel();

function rotateCarousel() {
  nextImage();
  setTimeout(rotateCarousel, 2000);
}

function updateView() {
  carousel.style.transform = `translateX(${-100 * currentImg}%`;
}

function prevImage() {
  currentImg--;
  currentImg = currentImg < 0 ? images.length - 1 : currentImg;
  updateView();
}

function nextImage() {
  currentImg++;
  currentImg = currentImg > images.length - 1 ? 0 : currentImg;
  updateView();
}



