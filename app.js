const ul = document.querySelector('.list');
const button = document.querySelector('button');
const input = document.querySelector('input');

const todoList = localStorage.length != 0 ? JSON.parse(localStorage.items) : [];
// console.log(todoList);
loadFromLocalStorage(todoList);
function addItem() {
  if (input.value !== '') {
    todoList.push({ item: input.value.trim(), done: false });
    ul.innerHTML += '<li>' + input.value + '</li>';
    input.value = '';
    input.focus();
    saveToLocalStorage(todoList);
  } else {
    alert('input is empty!!!');
  }
  for (let i = 0; i < ul.childNodes.length; i++) {
    ul.childNodes[i].addEventListener('click', toggleDone);
  }
}

function addItem1(e) {
  // console.log(e.keyCode);
  if (e.keyCode != 13) return;

  if (input.value !== '') {
    todoList.push({ item: input.value.trim(), done: false });
    ul.innerHTML += '<li>' + input.value + '</li>';
    input.value = '';
    input.focus();
    saveToLocalStorage(todoList);
  } else {
    alert('input is empty!!!');
  }
  for (let i = 0; i < ul.childNodes.length; i++) {
    ul.childNodes[i].addEventListener('click', toggleDone);
  }
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
  // console.log(e.target);
  // console.log(typeof this.classList.contains('done'));
  if (e.target.tagName === 'LI') {
    if (this.classList.contains('done')) {
      return this.classList.remove('done');
    }
    this.classList.add('done');
  }
}

// for (let item of localStorage.items) {
//   console.log(item);
// }

for (let i = 0; i < ul.childNodes.length; i++) {
  ul.childNodes[i].addEventListener('click', toggleDone);
}
button.addEventListener('onclick', addItem);
input.addEventListener('keypress', addItem1);
