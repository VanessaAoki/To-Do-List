/** * @jest-environment jsdom */ 

const {
  addToDo, deleteTodo
} = require('../todo');

describe('add and delete items', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = 
    `<form action="#" id="to-do-form">
      <input type="text" name="text" id="to-do-input" placeholder="Add to your list...">
      <button id="submit-button"><i class="fas fa-check"></i></button>
    </form>` +
    '<div>' +
    ' <ul id="to-do-list"></ul>' +
    '<div>';
    addToDo();
    addToDo();
    document.location.reload();
    const toDoList = document.querySelector('#to-do-list li');
    expect(toDoList).toHaveLength(2);
  }); 
});