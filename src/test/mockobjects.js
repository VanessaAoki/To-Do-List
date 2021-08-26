const myToDoMock = [
  {
    description: 'Wash car',
    completed: false,
    index: 1,
  },
  {
    description: 'Do homework',
    completed: false,
    index: 2,
  },
  {
    description: 'Feed dog',
    completed: false,
    index: 3,
  },
  {
    description: 'Read book',
    completed: false,
    index: 4,
  },
  {
    description: 'Play games',
    completed: false,
    index: 5,
  },
];

Object.defineProperty(global, 'myToDoMock', {
  value: myToDoMock,
});
