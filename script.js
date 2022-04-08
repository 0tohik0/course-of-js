'use strict';

let title = prompt('Как называется ваш проект?', 'Проектик по JS');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
let servicePrice1 = +prompt('Сколько это будет стоить?', '10000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', '16000');
let rollback = 20;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
       return 'Даем скидку в 10%';
    } else if (30000 > price && price >= 15000) {
        return 'Даем скидку в 5%';
    } else if ((15000 > price) && (price >= 0)) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    };
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

// console.log(servicePercentPrice);
