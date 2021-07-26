const search = document.querySelector('button');
const textInput = document.querySelector('input[type=text]');

search.addEventListener('click', () => {
  if (textInput.classList.contains('show')) {
    console.log('remove show');
    textInput.classList.remove('show');
  } else {
    console.log('add show')
    textInput.classList.add('show')
  }

})