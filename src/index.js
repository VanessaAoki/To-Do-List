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
    // li .task-container
    const newTodo = document.createElement('li');
    newTodo.classList.add('task-container');
    list.appendChild(newTodo);
    // div .checkbox-description-container
    const checkDiv = document.createElement('div');
    checkDiv.classList.add('checkbox-description-container');
    checkDiv.classList.add(`${todo.completed ? 'completed-task' : 'checkbox-description-container'}`);
    newTodo.appendChild(checkDiv);
    // input-checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox-input');
    checkbox.type = 'checkbox';
    todo.completed ? 'checkbox.checked = true' : '';
    checkDiv.appendChild(checkbox);
    // p
    const pDescription = document.createElement('p');
    pDescription.innerText = todo.description;
    checkDiv.appendChild(pDescription);
    // button .ellipsis
    const buttonMove = document.createElement('button');
    buttonMove.classList.add('move-button');
    buttonMove.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    buttonMove.onclick = function() { destroyBook(todo.index); };
    newTodo.appendChild(buttonMove);


    // list.innerHTML += `
    // <li class="task-container">
    //   <div class="checkbox-description-container ${todo.completed ? 'completed-task' : ''}">
    //     <input type="checkbox" class="checkbox-input" ${todo.completed ? 'checked' : ''}>
    //     <p>${todo.description}</p>
    //   </div>
    //   <button onclick="destroyBook()">delete</button>
    //   <i class="fas fa-ellipsis-v"></i>
    // </li>`;
    // id++
  });
}

function destroyBook (index) {
  myToDo.splice(index, 1);
  updateLocalStorage();
  // console.log(index);
}

function updateLocalStorage() {
  localStorage.myToDo = JSON.stringify(myToDo);
  document.location.reload();
  return false;
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
  updateLocalStorage();
  toDoInput.value = '';
}

// Event Listeners
window.addEventListener('DOMContentLoaded', renderList);
toDoButton.addEventListener('click', addToDo);