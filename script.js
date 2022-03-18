let title = "Урок по JavaScript";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 50;
let fullPrice = 50000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость вёрстки экранов", screenPrice, "рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта", fullPrice, "рублей/ долларов/гривен/юани")

console.log(screens.toLowerCase())
console.log(screens.split(", "))

console.log(fullPrice * (rollback/100))

// alert("Hello");
// console.log("Привет, Мир!");