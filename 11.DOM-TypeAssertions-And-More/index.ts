interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector('#todoForm') as HTMLFormElement;
const list = document.querySelector('#todolist') as HTMLUListElement;

const todos: Todo[] = [];

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  console.log('SUBMITTED!');
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);

  createTodo(newTodo);

  input.value = '';
};

const createTodo = (todo: Todo) => {
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
