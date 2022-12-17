"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput');
const form = document.querySelector('#todoForm');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    input.value = 'Learn Japanese';
    alert(input.value);
});
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITTED!');
};
form.addEventListener('submit', handleSubmit);
