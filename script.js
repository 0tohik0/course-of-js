'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getTitle();
        appData.getServicePercentPrices();

        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != 0;
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        } while (isNaN(appData.title) === false)
  
        for (let i = 0; i < 2; i++) {
            let servicePrice = 0;
            let name 

            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (isNaN(name) === false)

            do {
                servicePrice = +prompt('Сколько будет стоить данная работа?', '15000');
            } while(!appData.isNumber(servicePrice)) 

            appData.screens.push({ id: i, name: name, servicePrice: servicePrice })
        }

        for (let i = 0; i < 2; i++) {
            let servicePrice = 0
            let name

            do {
                name = prompt('Какой дополнительный тип услуги нужен?', "service1");
            } while (isNaN(name) === false);
    
            do {
                servicePrice = +prompt('Сколько это будет стоить?', '1500');
            } while(!appData.isNumber(servicePrice)) 

            appData.services[name] = +servicePrice
    
        }
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
    }, 
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.servicePrice
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1);
    },
    getRollbackMessage: function(price) {
        if (price >= 30000) {
           return 'Даем скидку в 10%';
        } else if (30000 > price && price >= 15000) {
            return 'Даем скидку в 5%';
        } else if (15000 > price && price >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        // for (let key in appData) {
        //     console.log(key + ': ' + appData[key]);
        // }
    }
}

appData.start();



// console.log(appData.services);