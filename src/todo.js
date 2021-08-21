import './checkbox';

let myToDo = [];

if (localStorage.myToDo !== undefined) {
  myToDo = JSON.parse(localStorage.myToDo);
}

// Selectors
const list = document.getElementById('to-do-list');
const toDoButton = document.getElementById('submit-button');
const toDoInput = document.getElementById('to-do-input');
const toDoClear = document.getElementById('to-do-clear');

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
    checkbox.checked = (`${todo.completed ? 'true' : ''}`);
    checkDiv.appendChild(checkbox);
      // p
    const pDescription = document.createElement('p');
    pDescription.classList.add(`description-${todo.index}`);
    pDescription.innerText = todo.description;
    checkDiv.appendChild(pDescription);
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
      // Button edit
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-button');
    buttonEdit.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    buttonEdit.onclick = function() { editToDo(todo.index, todo.description); };
    editButtonsDiv.appendChild(buttonEdit);
      // Button delete
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-button');
    buttonDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    buttonDelete.onclick = function() { deleteTodo(todo.index); };
    editButtonsDiv.appendChild(buttonDelete);
      // button menu .ellipsis
    const buttonMenu = document.createElement('button');
    buttonMenu.classList.add(`move-button-${todo.index}`);
    buttonMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    buttonMenu.onclick = function() { showButtons(todo.index); };
    buttonsDiv.appendChild(buttonMenu);
  });
}

function deleteTodo (index) {
  myToDo.splice(index, 1);
  updateIndex();
}

function showButtons (index) {
  document.querySelector(`.buttons-container-${index}`).classList.toggle('hidden');
}

function editToDo(index, value) {
  document.querySelector(`.description-${index}`).classList.toggle('hidden');
  const checkDiv = document.querySelector('.checkbox-description-container');
  const editInput = document.createElement('input');
  checkDiv.appendChild(editInput);
  editInput.classList.add('edit-input');
  editInput.setAttribute('value', `${value}`);
  
}
// const newDescription = descriptionInput.value;
//   if (e.keyCode == 13) {
//   const oldToDo = JSON.parse(localStorage.myToDo);
//   oldToDo[todo.index].description = newDescription;
//   localStorage.setItem("myToDo", JSON.stringify(oldToDo));
//   }

function updateIndex() {
  let counter = 0;
  myToDo.forEach((todo) => {
    todo.index = counter;
    counter++;
  });
  updateLocalStorage();
}

function clearCompleted() {
  myToDo = myToDo.filter((todo) => (todo.completed == false));
  updateLocalStorage();
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
toDoClear.addEventListener('click', clearCompleted);