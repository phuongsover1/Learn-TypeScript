const btn = document.getElementById('btn');
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector('#todoForm') as HTMLFormElement;

btn?.addEventListener('click', () => {
  input.value = 'Learn Japanese';
  alert(input.value);
});

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  console.log('SUBMITTED!');
};
form.addEventListener('submit', handleSubmit);
