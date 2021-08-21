export default function checkTodo(todo) {
  const todos = JSON.parse(localStorage.getItem('myToDo'));
  const todoIndex = todos.findIndex((item) => item.description === todo.children[1].value);
  todos[todoIndex].completed = !todos[todoIndex].completed;
  localStorage.setItem('myToDo', JSON.stringify(todos));
}

const list = document.getElementById('to-do-list');

list.addEventListener('change', (e) => {
  const item = e.target;
  if (item.classList[0] === 'checkbox-input') {
    const item2 = item.parentElement;
    item2.classList.toggle('completed-task');
    checkTodo(item2);
  }
});
