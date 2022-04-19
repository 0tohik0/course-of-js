'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0
}

const one = function () {
    let randomVariant = Math.floor(Math.random() * 100)
    let count = 10

    console.log(randomVariant);

    const two = function () {
        let variant = +prompt("Угадай число от 1 до 100")
        count--
        if (variant == randomVariant) {
            const again = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
            if (again) {
                one()
            } else {
                alert('Игра окончена.')
            }
        } else if (count < 1) {
            const again = confirm('Попытки закончились. Хотите сыграть еще?')
            if (again) {
                one()
            } else {
                alert('Игра окончена.')
            }
        } else if (variant === null) {
            alert('Игра окончена.')
        } else if (!isNumber(variant)) {
            alert('Введи число!')
            count++
            two()
        } else if (variant > 100) {
            alert('Введи число меньше ста!')
            count++
            two()
        } else if (variant < randomVariant) {
            alert('Загаданное число больше, осталось попыток: ' + count)
            two()
        } else if (variant > randomVariant) {
            alert('Загаданное число меньше, осталось попыток: ' + count)
            two()
        }
    }
    two()
}

one()

