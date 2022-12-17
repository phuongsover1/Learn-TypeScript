"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput');
const form = document.querySelector('#todoForm');
const list = document.querySelector('#todolist');
const todos = [];
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITTED!');
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
};
const createTodo = (todo) => {
    const newText = todo.text;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    const newLi = document.createElement('li');
    newLi.append(newText);
    newLi.append(checkbox);
    list.append(newLi);
};
form.addEventListener('submit', handleSubmit);
