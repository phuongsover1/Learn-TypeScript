"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    input.value = 'Learn Japanese';
    alert(input.value);
});
