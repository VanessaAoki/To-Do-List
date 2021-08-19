export default function checkTodo(todo) {
  const todos = JSON.parse(localStorage.getItem('myToDo'));
  const todoIndex = todos.findIndex((item) => item.description === todo.children[1].innerText);
  todos[todoIndex].completed = !todos[todoIndex].completed;
  localStorage.setItem('myToDo', JSON.stringify(todos));
}

const list = document.getElementById('to-do-list');

list.addEventListener('change', function(e) {
  const item = e.target;
  if (item.classList[0] === 'checkbox-input') {
    console.log(item.classList[0])
    const item2 = item.parentElement;
    item2.classList.toggle('completed-task');
    checkTodo(item2);
  }
});
