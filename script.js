'use strict'

const makeAGuess = function(n){
n = 87;
let randomNumber = prompt("Угадай число от 1 до 100. Введите число");
{
  if (randomNumber === null){
    alert("Игра окончена!")
}
  else if (randomNumber > n){
    alert("Загаданное число меньше")
  } 
    else if (randomNumber < n){
      alert("Загаданное число больше.")
  }
    else if (isNaN(randomNumber)){
      alert("Введите число!")
  } 
  else  alert ("Поздравляю, Вы угадали!!!")
}
  return makeAGuess();
}
makeAGuess();