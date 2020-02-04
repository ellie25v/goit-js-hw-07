'use strict';

const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterDecrement = function(){
    counterValue.textContent--;
}
decrementBtn.addEventListener('click', () =>{
    counterDecrement()
})

const counterIncrement = function(){
    counterValue.textContent++;
}
incrementBtn.addEventListener('click', () =>{
    counterIncrement()
})