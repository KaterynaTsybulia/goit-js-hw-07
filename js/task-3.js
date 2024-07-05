// Завдання 3


const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

const h1Element = document.querySelector('h1');
h1Element.classList.add('title-anonymous');

input.addEventListener('input', function () {
    const name = input.value.trim();
    
    if (name === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = name;
    }
});
