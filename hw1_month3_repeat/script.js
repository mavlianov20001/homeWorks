// dz 1  часть

// const input = document.querySelector(".input")
// const button = document.querySelector(".button")
// const span = document.querySelector(".result")
// const regExp = /^\d{14}$/

// // input.value.trim();
// const onclick = function ()  {
//      if (regExp.test(input.value)) {
//           span.innerHTML = "КОРЕКТНО";
//           span.style.color = "green";
//           input.value = ""
//      }else{
//           span.innerHTML = "Введите ИНН: длина должна быть 14";
//           span.style.color = "red";
//           // input.value = ""
//      }
// }
// button.addEventListener("click", onclick);
// input.addEventListener("keydown", (e) => e.keyCode === 13 ? onclick() : false);

// dz 2 часть 

// let possition = 0

// const move = () => {
//      let block = document.querySelector('.small__block')
//      possition++
//      block.style.left = `${possition}px`
//      if(possition < 450) {
//           setTimeout(move, 1)
//      }
// }
// move()
