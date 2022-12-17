interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector('#todoForm') as HTMLFormElement;
const list = document.querySelector('#todolist') as HTMLUListElement;
const readTodos = (): Todo[] => {
  const todoJSON = localStorage.getItem('todos');
  if (todoJSON === null) return [];
  return JSON.parse(todoJSON);
};

const saveTodos = (): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const createTodo = (todo: Todo) => {
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

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  console.log('SUBMITTED!');
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);

  createTodo(newTodo);

  saveTodos();
  input.value = '';
};

form.addEventListener('submit', handleSubmit);
