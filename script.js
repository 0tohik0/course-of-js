'use strict';

let title = prompt("Как называется ваш проект?", "Калькулятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 16000);
let rollback = Math.random() * 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        sum += +prompt("Какой дополнительный тип услуги нужен?");
    }

    return  sum 
    // return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function () {
   return screenPrice + getAllServicePrices;
};

const getTitle = function () {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даём скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даём скидку в 5";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так";
    }
}

AllServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("AllServicePrices", AllServicePrices)

console.log("Следующие типы экранов: " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Cтоимость за вычетом процента отката посреднику:" + Math.round(servicePercentPrice));