const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach((btn) => addClickListener(btn));

function addClickListener(btn) {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
}