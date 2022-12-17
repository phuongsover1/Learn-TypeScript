const btn = document.getElementById('btn');
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector('#todoForm') as HTMLFormElement;
const list = document.querySelector('#todolist') as HTMLUListElement;

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  console.log('SUBMITTED!');

  const newTodoText = input.value;
  const newLI = document.createElement('LI');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newLI.append(newTodoText);
  newLI.append(checkbox);

  list.append(newLI);
  input.value = '';
};
form.addEventListener('submit', handleSubmit);
