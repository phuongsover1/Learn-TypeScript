const btn = document.getElementById('btn');
const input = document.getElementById('todoInput')! as HTMLInputElement;

btn?.addEventListener('click', () => {
  input.value = 'Learn Japanese';
  alert(input.value);
});
