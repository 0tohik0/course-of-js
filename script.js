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
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

let fullPrice = -15000;
console.log(fullPrice);

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if ((fullPrice < 30000) && (15000 <= fullPrice)) {
    console.log('Даем скидку в 5%');
} else if ((fullPrice < 15000) && (0 <= fullPrice)) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
};


// console.log(servicePercentPrice);

