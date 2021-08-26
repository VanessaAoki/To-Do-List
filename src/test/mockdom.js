const mockInnerHTML = `<section class="to-do-container">
<h1>To Do</h1>
<form action="#" id="to-do-form">
    <input type="text" name="text" id="to-do-input" placeholder="Add to your list...">
    <button id="submit-button"><i class="fas fa-check"></i></button>
</form>
<ul id="to-do-list"></ul>
<button id="to-do-clear">Clear all completed</button>
</section>`;

Object.defineProperty(global, 'mockInnerHTML', {
  value: mockInnerHTML,
});
