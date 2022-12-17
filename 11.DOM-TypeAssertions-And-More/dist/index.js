"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput');
const form = document.querySelector('#todoForm');
const list = document.querySelector('#todolist');
const readTodos = () => {
    const todoJSON = localStorage.getItem('todos');
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
};
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const createTodo = (todo) => {
    const newText = todo.text;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    const newLi = document.createElement('li');
    newLi.append(newText);
    newLi.append(checkbox);
    list.append(newLi);
};
const todos = readTodos();
todos.forEach(createTodo);
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITTED!');
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
