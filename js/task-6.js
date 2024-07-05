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

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '10px';
    boxesContainer.appendChild(box);
    size += 10; 
  }

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
