const refs = {
  mainBody: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  refs.mainBody.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(onStartBtn, 1000);
  if (onStartBtn) {
    refs.startBtn.setAttribute('disabled', 'true');
  };
};

function onStopBtn() {
  clearInterval(intervalId);
  refs.startBtn.setAttribute('disabled', 'false');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// function onStartBtn() {
//     refs.mainBody.style.backgroundColor = getRandomHexColor();
//     intervalId = setInterval(onStartBtn, 1000);
//     if (onStartBtn) {
//       refs.startBtn.setAttribute('disabled', 'true');
//     }
//   }