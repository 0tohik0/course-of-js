'use strict';

let title = prompt("Как называется ваш проект?", "Название проекта");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let rollback = Math.random() * 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "service1");
let servicePrice1 = +prompt("Сколько это будет стоить?", "servicePrice1");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "servicePrice2");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);


if (fullPrice >= 30000) {
    console.log("Даём скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даём скидку в 5");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
}else {
    console.log("Что-то пошло не так");
}