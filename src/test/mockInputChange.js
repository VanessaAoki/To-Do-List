// eslint-disable-next-line import/prefer-default-export
export const inputEvent = {
  init(list, newDescription, index) {
    const pDescription = document.querySelector('.description-3');
    pDescription.addEventListener('keydown', () => {
      this.instance(list, newDescription, index);
    });
  },
  instance(list, newDescription, index) {
    list[index].description = newDescription;
    localStorage.setItem('myToDo', JSON.stringify(list));
  },
};
