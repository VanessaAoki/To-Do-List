import {
  addToDo, deleteTodo, renderList,
} from '../todo';

describe('add and delete items', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = `<section class="to-do-container">
    <h1>To Do</h1>
    <form action="#" id="to-do-form">
        <input type="text" name="text" id="to-do-input" placeholder="Add to your list...">
        <button id="submit-button"><i class="fas fa-check"></i></button>
    </form>
    <ul id="to-do-list"></ul>
    <button id="to-do-clear">Clear all completed</button>
    </section>`;
    addToDo();
    renderList();
    const toDoList = document.querySelectorAll('#to-do-list li');
    expect(toDoList).toHaveLength(1);
  });
  test('delete one item from the list', () => {
    document.body.innerHTML = `<section class="to-do-container">
    <h1>To Do</h1>
    <form action="#" id="to-do-form">
        <input type="text" name="text" id="to-do-input" placeholder="Add to your list...">
        <button id="submit-button"><i class="fas fa-check"></i></button>
    </form>
    <ul id="to-do-list"></ul>
    <button id="to-do-clear">Clear all completed</button>
    </section>`;
    deleteTodo(0);
    renderList();
    const toDoList = document.querySelectorAll('#to-do-list li');
    expect(toDoList).toHaveLength(0);
  });
});

describe('Add and Remove Items from local Storage', () => {
  test('Add new item to localStorage', () => {
    addToDo();
    expect(JSON.parse(localStorage.getItem('myToDo'))).toHaveLength(1);
  });
  test('delete one item from the localStorage', () => {
    deleteTodo(0);
    expect(JSON.parse(localStorage.getItem('myToDo'))).toHaveLength(0);
  });
});