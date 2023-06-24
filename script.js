'use strict'

const makeAGuess = function(n){
n = 87;
let randomNumber = prompt("Угадай число от 1 до 100. Введите число");
{
if (randomNumber === null){
alert("Игра окончена!")
return
}
if (isNaN(randomNumber)){
alert("Введите число!")
}
if (randomNumber == n) {
alert("Поздравляю, Вы угадали!!!")
}
if (randomNumber > n){
alert("Загаданное число меньше")
}
if (randomNumber < n){
alert("Загаданное число больше")
}
}
return makeAGuess();
}
makeAGuess();