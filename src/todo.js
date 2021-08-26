/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

import './checkbox';

let myToDo = JSON.parse(localStorage.getItem('myToDo')) || [];

// Selectors

let toDoButton = document.getElementById('submit-button');
let toDoClear = document.getElementById('to-do-clear');

// Functions
export function renderList() {
  const list = document.getElementById('to-do-list');
  myToDo = JSON.parse(localStorage.getItem('myToDo')) || [];
  list.innerHTML = '';
  myToDo.forEach((todo) => {
    // li .task-container
    const newTodo = document.createElement('li');
    newTodo.classList.add('task-container');
    list.appendChild(newTodo);
    // div .checkbox-description-container
    const checkDiv = document.createElement('div');
    checkDiv.classList.add('checkbox-description-container');
    newTodo.appendChild(checkDiv);
    // input-checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox-input');
    checkbox.type = 'checkbox';
    checkbox.checked = (`${todo.completed ? 'true' : ''}`);
    checkDiv.appendChild(checkbox);
    // input-description
    const pDescription = document.createElement('input');
    pDescription.classList.add(`description-${todo.index}`);
    pDescription.value = todo.description;
    pDescription.classList.add('edit-input');
    pDescription.classList.add(`${todo.completed ? 'completed-task' : 'checkbox-description-container'}`);
    checkDiv.appendChild(pDescription);
    pDescription.addEventListener('keydown', (e) => {
      const newDescription = pDescription.value;
      if (e.keyCode === 13) {
        const oldToDo = JSON.parse(localStorage.getItem('myToDo'));
        oldToDo[todo.index].description = newDescription;
        localStorage.setItem('myToDo', JSON.stringify(oldToDo));
      }
    });
    // div .buttons-container
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('show');
    newTodo.appendChild(buttonsDiv);
    // div .edit-buttons-container
    const editButtonsDiv = document.createElement('div');
    editButtonsDiv.setAttribute('id', `edit-buttons-${todo.index}`);
    editButtonsDiv.classList.add('hidden');
    editButtonsDiv.classList.add(`buttons-container-${todo.index}`);
    buttonsDiv.appendChild(editButtonsDiv);
    // Button delete
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-button');
    buttonDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    buttonDelete.onclick = function () { deleteTodo(todo.index); };
    editButtonsDiv.appendChild(buttonDelete);
    // button menu .ellipsis
    const buttonMenu = document.createElement('button');
    buttonMenu.classList.add(`move-button-${todo.index}`);
    buttonMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    buttonMenu.onclick = function () { showButtons(todo.index); };
    buttonsDiv.appendChild(buttonMenu);
  });
}

export function updateLocalStorage() {
  localStorage.setItem('myToDo', JSON.stringify(myToDo));
  // myToDo = JSON.parse(localStorage.getItem('myToDo')) || [];
  // global.document.location.reload();
  renderList();
}

function updateIndex() {
  let counter = 1;
  myToDo.forEach((todo) => {
    todo.index = counter;
    counter++;
  });
  updateLocalStorage();
}

export function deleteTodo(index) {
  myToDo.splice(index, 1);
  updateIndex();
}

function showButtons(index) {
  document.querySelector(`.buttons-container-${index}`).classList.toggle('hidden');
}

export function clearCompleted() {
  myToDo = JSON.parse(localStorage.getItem('myToDo'));
  myToDo = myToDo.filter((todo) => (todo.completed === false));
  updateIndex();
  updateLocalStorage();
}

export function addToDo(e) {
  // e.preventDefault();
  const toDoInput = document.getElementById('to-do-input');
  const list = document.getElementById('to-do-list');
  const description = toDoInput.value;
  const index = myToDo.length + 1;
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
document.addEventListener('DOMContentLoaded', () => {
  toDoButton = document.getElementById('submit-button');
  toDoClear = document.getElementById('to-do-clear');
  toDoButton.addEventListener('click', addToDo);
  toDoClear.addEventListener('click', clearCompleted);
});
