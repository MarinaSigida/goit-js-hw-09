const refs =  {
  delayInput = document.querySelector('input[name="delay"]'),
  stepInput =document.querySelector('input[name="step"]'),
  amountInput =document.querySelector('input[name="amount"]'),
  submitBtn =document.querySelector('button[type="submit"]'),
}

refs.submitBtn.addEventListener('submit', createPromise);

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
// стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй 
// номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), 
// введену користувачем, і крок (step).


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const delay = refs.delayInput;
  if (shouldResolve) {
    // Fulfill
    for (let i=0; i<=refs.amountInput; i+=1){
      return new Promise (resolve => {
        setTimeout(() => {
          if ())
      }, 
        delay);
      });
    }
  } else {
    // Reject
  }
}



// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//  який виконується або відхиляється через delay часу. 
//  Значенням промісу повинен бути об'єкт, в якому будуть властивості position
//   і delay зі значеннями однойменних параметрів. 
//  Використовуй початковий код функції для вибору того, що потрібно зробити 
//  з промісом - виконати або відхилити.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });