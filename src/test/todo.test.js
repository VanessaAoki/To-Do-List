import {
  addToDo, deleteTodo, renderList, clearCompleted,
} from '../todo';

import {
  checkTodo,
} from '../checkbox';

describe('Add and delete items', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = mockInnerHTML;
    addToDo();
    renderList();
    const toDoList = document.querySelectorAll('#to-do-list li');
    expect(toDoList).toHaveLength(1);
  });
  test('Delete one item from the list', () => {
    document.body.innerHTML = mockInnerHTML;
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
  test('Delete one item from the localStorage', () => {
    deleteTodo(0);
    expect(JSON.parse(localStorage.getItem('myToDo'))).toHaveLength(0);
  });
});

describe('Update the completed status from tasks', () => {
  test('Mark do homework as completed', () => {
    localStorage.setItem('myToDo', JSON.stringify(myToDoMock));
    renderList();
    const inputMock = document.querySelector('.description-2');
    checkTodo(inputMock);
    expect(JSON.parse(localStorage.getItem('myToDo'))[1].completed).toBeTruthy();
  });
});

describe('Delete all completed tasks', () => {
  test('Delete tasks 1 and 2', () => {
    localStorage.setItem('myToDo', JSON.stringify(myToDoMock));
    renderList();
    const inputMock1 = document.querySelector('.description-1');
    checkTodo(inputMock1);
    const inputMock2  = document.querySelector('.description-2');
    checkTodo(inputMock2);
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('myToDo'))).toHaveLength(3);
  });
});