const notify_container = document.getElementById('notify-container');
const showBtn = document.getElementById('show');

showBtn.addEventListener('click', addNotification);

function addNotification() {
  const notifyEl = document.createElement('button');
  notifyEl.className = 'btn notify';

  notifyEl.style.color = getRandomColor();
  notifyEl.innerHTML = getRandomMessage();

  notify_container.appendChild(notifyEl);

  setTimeout(() => notify_container.removeChild(notifyEl), 4000);
}

function getRandomColor() {
  const colors = ['purple', 'green', 'blue', 'yellow'];
  const rnd = getRnd(colors.length);
  console.log(colors[rnd]);
  return colors[rnd];
}

function getRandomMessage() {
  const messages = ['Message 1', 'Message 2', 'Message Three', 'Message Four'];
  const rnd = getRnd(messages.length);
  return messages[rnd];
}

function getRnd(max) {
  return Math.floor(Math.random() * max);
}
