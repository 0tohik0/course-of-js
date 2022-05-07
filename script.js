'use strict';

const button = document.getElementById('btn');
const square = document.getElementById('square');
const inputText = document.querySelector('[type="text"]')
const e_button = document.getElementById('e_btn')
const inputRange = document.querySelector('[type="range"]')
const circle = document.getElementById('circle')
const spanRange = document.getElementById('range-span')

button.addEventListener('click', function() {
    square.style.backgroundColor = inputText.value
})

e_button.addEventListener('click', function() {
    e_button.style.display = 'none'
})

const logger = function (e) {
    spanRange.textContent = e.target.value
}

const changeWH = function (e) {
    circle.style.width = e.target.value + '%'
    circle.style.height = e.target.value + '%'
}

inputRange.addEventListener('input', logger)
inputRange.addEventListener('input', changeWH)






