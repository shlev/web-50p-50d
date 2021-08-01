const boxes = document.querySelectorAll('.box');

updateBoxes();

window.addEventListener('scroll', updateBoxes)

function updateBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((box) => updateCard(box, triggerBottom));
}

function updateCard(box, triggerBottom) {
  const boxTop = box.getBoundingClientRect().top;
  if ( boxTop < triggerBottom) {
    box.classList.add('show');
  } else {
    box.classList.remove('show');
  }
}
