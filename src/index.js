/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.css';
import './checkbox';

let myToDo = [];

if (localStorage.myToDo !== undefined) {
  myToDo = JSON.parse(localStorage.myToDo);
}

// Selectors
const list = document.getElementById('to-do-list');
const toDoButton = document.getElementById('submit-button');
const toDoInput = document.getElementById('to-do-input');

// Functions
function renderList() {
  myToDo.forEach((todo) => {
    list.innerHTML += `
    <li class="task-container">
      <div class="checkbox-description-container ${todo.completed ? 'completed-task' : ''}">
        <input type="checkbox" class="checkbox-input" ${todo.completed ? 'checked' : ''}>
        <p>${todo.description}</p>
      </div>
      <i class="fas fa-ellipsis-v"></i>
    </li>`;
  });
}

function addToDo(e) {
  e.preventDefault();
  const description = toDoInput.value;
  const index = myToDo.length;
  myToDo.push({
    description,
    completed: false,
    index,
  });
  list.innerHTML = '';
  renderList();
  localStorage.myToDo = JSON.stringify(myToDo);
  toDoInput.value = '';
}

// Event Listeners
window.addEventListener('DOMContentLoaded', renderList);
toDoButton.addEventListener('click', addToDo);
