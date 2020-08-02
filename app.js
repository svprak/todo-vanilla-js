const ul = document.querySelector('.list');
const button = document.querySelector('button');
const input = document.querySelector('input');


function addItem() {
    // e.preventDefault();


    ul.innerHTML += '<li>' + input.value + '</li>';
    input.value = "";
    input.focus();
    // console.log(input.textContent)
}

button.addEventListener('onclick', addItem)
console.log(button)