'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

input.addEventListener("input", onInput);

function onInput(e) {
    console.log(e);
    if (!input.value) {
        name.textContent = 'незнакомец';
    } else {
        name.textContent = input.value;
    }
}