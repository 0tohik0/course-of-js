'use strict';

const book = document.querySelectorAll('.book')
const backgroundImage = document.querySelector('body')
const title = document.querySelectorAll('h2 > a')
const adv = document.querySelector('.adv')
const li2 = book[0].querySelectorAll('li')
const li5 = book[5].querySelectorAll('li') 
const li6 = book[2].querySelectorAll('li')

book[0].before(book[1])
book[2].before(book[4])
book[2].before(book[3])
book[2].before(book[5])

backgroundImage.style.backgroundImage = "url(../image/you-dont-know-js.jpg)"

title[4].innerText = "Книга 3. this и Прототипы Объектов"

adv.remove()

li2[10].before(li2[2])
li2[3].after(li2[6])
li2[6].after(li2[8])

li5[4].after(li5[2])
li5[3].before(li5[9])
li5[8].before(li5[5])

const newCreateEl = document.createElement('li')
newCreateEl.textContent = 'Глава 8: За пределами ES6'

book[2].querySelector('ul').append(newCreateEl);
newCreateEl.after(li6[9])








