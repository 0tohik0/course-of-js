'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0
}

const numberRun = function () {
    let randomNumber = Math.floor(Math.random() * 100)
    let count = 10

    console.log(randomNumber);

    const numberInput = function () {
        let numb = +prompt('Угадай число от 1 до 100')
        count--
        if (numb == randomNumber) {
            const again = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
            if (again) {
                numberRun()
            } else {
                alert('Игра окончена.')
            }
        } 
        else if (count < 1) {
            const again = confirm('Попытки закончились. Хотите сыграть еще?')
            if (again) {
                numberRun()
            } else {
                alert('Игра окончена.')
            }
        } 
        else if (numb === null) {
            alert('Игра окончена.')
        } 
        else if (!isNumber(numb)) {
            alert('Введи число!')
            count++
            numberInput()
        } 
        else if (numb < randomNumber) {
            alert('Загаданное число больше, осталось попыток: ' + count)
            numberInput()
        } 
        else if (numb > randomNumber) {
            alert('Загаданное число меньше, осталось попыток: ' + count)
            numberInput()
        }
    }
    numberInput()
}

numberRun()