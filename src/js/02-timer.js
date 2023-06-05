const flatpickr = require('flatpickr');

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('input#datetime-picker'),
  daysLeft: document.querySelector('span[data-days]'),
  hoursLeft: document.querySelector('span[data-hours]'),
  minutesLeft: document.querySelector('span[data-minutes]'),
  secondsLeft: document.querySelector('span[data-seconds]'),
};

// Якщо користувач вибрав дату в минулому, покажи window.alert()
// з текстом "Please choose a date in the future".
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let userDate = selectedDates[0].getTime();
    const currentDate = new Date();
    if (userDate < currentDate.getTime()) {
      Notiflix.Notify.info('Please choose a date in the future');
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

// функція flatpickr(selector, options)
const datetimePicker =flatpickr('#datetime-picker', options);

let timerId;

refs.startBtn.addEventListener('click', timerOn);



// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
// Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.

function timerOn() {
  timeLeftCalc();
  timerId = setInterval(() => timeLeftCalc(), 1000);
}

function timeLeftCalc() {
  const selectedDate = datetimePicker.selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  const difference = selectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(difference);
  refs.daysLeft.textContent = addLeadingZero(days);
  refs.hoursLeft.textContent = addLeadingZero(hours);
  refs.minutesLeft.textContent = addLeadingZero(minutes);
  refs.secondsLeft.textContent = addLeadingZero(seconds);
  if (difference <= 0) {
    clearInterval(timerId);
    refs.daysLeft.textContent = '00';
    refs.hoursLeft.textContent = '00';
    refs.minutesLeft.textContent = '00';
    refs.secondsLeft.textContent = '00';
    return;
  }
}

//   В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів.
//   Напиши функцію addLeadingZero(value), яка використовує метод padStart() і
//   перед рендерингом інтефрейсу форматує значення.
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// Для підрахунку значень використовуй готову функцію convertMs,
// ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {days, hours, minutes, seconds};
}


