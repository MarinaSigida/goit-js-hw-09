import Notiflix from 'notiflix';

const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', generatePromises);

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay)
// стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй
// номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay),
// введену користувачем, і крок (step).

function generatePromises(event) {
  event.preventDefault();
  let delay = parseInt(refs.delayInput.value);
  let step = parseInt(refs.stepInput.value);
  let amount = parseInt(refs.amountInput.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notiflix.Notify.failure(
      `❌ Please enter valid numbers`
    );
    return;
  };

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//  який виконується або відхиляється через delay часу.
//  Значенням промісу повинен бути об'єкт, в якому будуть властивості position
//   і delay зі значеннями однойменних параметрів.
//  Використовуй початковий код функції для вибору того, що потрібно зробити
//  з промісом - виконати або відхилити.
