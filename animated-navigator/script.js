const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));

const test = document.querySelector('.test');

// test.addEventListener('click', () => {
//  console.log("rotate"); 
// test.classList.toggle('rotate')
// });