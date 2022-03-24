let title = 'Проектик по JS';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 10;
let rollback = 90;
let fullPrice = 50000;
let adaptive = false;


console.log(typeof title);  //тип данных переменнной title
console.log(typeof fullPrice);  //тип данных переменнной fullPrice
console.log(typeof adaptive);  //тип данных переменнной adaptive

console.log(screens.length);  //длина строки screens

console.log('Стоимость верстки экранов', screenPrice, 'рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта', fullPrice, 'рублей/ долларов/гривен/юани');

console.log(screens.toLowerCase()); //нижний регистр
console.log(screens.split(",")); //массив

console.log('Процент отката посреднику за работу', (fullPrice * (rollback/100))); 
