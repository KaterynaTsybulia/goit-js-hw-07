// Завдання 6


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Math.round(input.value);
  
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('The number must be between 1 and 100');
    return;
  }
  
  boxesContainer.innerHTML = '';

  let size = 30;

  const boxesHTML = Array.from({ length: amount }).map((_, index) => {
    const backgroundColor = getRandomHexColor();
    const style = `width: ${size}px; height: ${size}px; background-color: ${backgroundColor};`;
    size += 10;
    return `<div style="${style}"></div>`;
  }).join('');

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
  
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
