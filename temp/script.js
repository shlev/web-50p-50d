const xboxBtn = document.querySelector('.xbox .btn');
const ps5Btn = document.querySelector('.ps5 .btn' );

const xbox = document.querySelector('.xbox');
const ps5 = document.querySelector('.ps5');
xboxBtn.addEventListener('click', setXbox);
ps5Btn.addEventListener('click', setPs5);

function setXbox() {
  ps5.classList.remove('w75');
  ps5.classList.add('w25');
  xbox.classList.remove('w25');
  xbox.classList.add('w75');
}

function setPs5() {
  ps5.classList.remove('w25');
  xbox.classList.remove('w75');
  ps5.classList.add('w75');
  xbox.classList.add('w25');
}