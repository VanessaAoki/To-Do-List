import _ from 'lodash';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css';

const myToDo = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1
  },
  {
    description: 'attend stand up meeting',
    completed: false,
    index: 2
  }
];

function renderList() {
  const list = document.getElementById('to-do-list');
  list.innerHTML = '';
  let index = 0;
  for (const todo of myToDo) {
    list.innerHTML += `
    <li class="task-container">
      <div class="checkbox-description-container">
        <input type="checkbox">
        <p>${todo.description}</p>
      </div>
      <i class="fas fa-ellipsis-v"></i>
    </li>`;
  }
}

window.addEventListener('load', renderList);