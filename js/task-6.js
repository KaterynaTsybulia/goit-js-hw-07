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

createButton.addEventListener('click', boxesCreate);
destroyButton.addEventListener('click', destroyBoxes);

function boxesCreate() {
  const value = Number(input.value);
  if (value < 1 || value > 100) {
    return;
  }

  boxesContainer.innerHTML = createBoxes(value);
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function createBoxes(amount) {
  let markup = "";
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    markup += `<div style="background-color:${getRandomHexColor()}; width: ${size}px; heigth:${size}px;"></div>`;
  }

  return markup
}
