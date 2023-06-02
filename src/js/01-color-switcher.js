const refs = {
  mainBody: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

// variable to store our intervalID
let intervalId;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
    refs.startBtn.setAttribute('disabled', true);
  }
}

function changeColor() {
  refs.mainBody.style.backgroundColor = getRandomHexColor();
}

function onStopBtn() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
  // release our intervalID from the variable
  intervalId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
