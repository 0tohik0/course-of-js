'use strict';

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 20;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrice;
// let service1;
// let service2;

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '15000');
        } while(!isNumber(appData.screenPrice)) 
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
    }
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0;
}

const getAllServicePrices = function () {
    let sum = 0
    let servicePrice 

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
        } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Отправка формы');
        }

        do {
            servicePrice = +prompt('Сколько это будет стоить?', '1500');
        } while(!isNumber(servicePrice)) 

        sum += servicePrice
    }

    return sum
    // return servicePrice1 + servicePrice2;
};

const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
};

const getServicePercentPrices = function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
};

const getTitle = function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1);
};

const getRollbackMessage = function(price) {
    if (price >= 30000) {
       return 'Даем скидку в 10%';
    } else if (30000 > price && price >= 15000) {
        return 'Даем скидку в 5%';
    } else if (15000 > price && price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    };
}; 

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.title = getTitle();
appData.servicePercentPrice = getServicePercentPrices();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);