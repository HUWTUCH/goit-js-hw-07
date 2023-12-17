function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищення попередніх елементів

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищення всіх елементів
}

document.addEventListener('DOMContentLoaded', function () {
  const createButton = document.querySelector('[data-create]');
  const amountInput = document.getElementById('amountInput');

  createButton.addEventListener('click', function () {
    const amount = Number(amountInput?.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      amountInput.value = ''; // Очищення значення в інпуті
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
});