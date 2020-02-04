'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontSize = document.querySelector('#font-size-control');
const abrakadabra = document.querySelector('#text');

inputFontSize.setAttribute('min', 20);
inputFontSize.setAttribute('max', 70);
inputFontSize.setAttribute('step', 5);

inputFontSize.addEventListener('change', onInput)


function onInput(e) {
    console.log('inputFontSize.value :', inputFontSize.value);
    if (inputFontSize.value) {
        abrakadabra.style.fontSize = `${inputFontSize.value}px`;
    }
}