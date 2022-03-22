'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = Math.random() * 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function(price) {
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

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
fullPrice = getAllServicePrices();

const getFullPrice = function() {
   return screenPrice + fullPrice;
};
    fullPrice = getFullPrice();

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 
    title = getTitle();

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};
    servicePercentPrice = getServicePercentPrices();



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Следующие типы экранов: " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Cтоимость за вычетом процента отката посреднику:" + Math.round(servicePercentPrice));