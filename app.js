const ul = document.querySelector('.list');
const button = document.querySelector('button');
const input = document.querySelector('input');

const todoList = JSON.parse(localStorage.items);

function addItem() {
  // e.preventDefault();
  if (input.value !== '') {
    todoList.push({ item: input.value.trim(), done: false });
    ul.innerHTML += '<li>' + input.value + '</li>';
    input.value = '';
    input.focus();

    saveToLocalStorage(todoList);
  }
  // console.log(input.textContent)
}
function saveToLocalStorage(items) {
  localStorage.setItem('items', JSON.stringify(items));
}
function loadFromLocalStorage(todos) {
  for (let i of todos) {
    ul.innerHTML += '<li>' + i.item + '</li>';
  }
}
function removeItem() {
  //TODO
  //Remove item from the todo list
}
function toggleDone(e) {
  //TODO
  //Check list if it is done
  console.log(e.target);

  if (e.target.tagName === 'LI') {
    this.classList.add('done');
  }
}
loadFromLocalStorage(todoList);

// for (let item of localStorage.items) {
//   console.log(item);
// }
console.log(ul.childNodes);
for (let i = 0; i < ul.childNodes.length; i++) {
  ul.childNodes[i].addEventListener('click', toggleDone);
}
button.addEventListener('onclick', addItem);
