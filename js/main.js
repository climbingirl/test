const field = document.querySelector('.field');
const cellSize = 100;

const emty = {
  top: 0,
  left: 0
}

for (let i = 1; i <= 15; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerHTML = i;

  const left = i % 4;
  const top = (i - left) / 4;

  cell.style.left = `${left * cellSize}px`
  cell.style.top = `${top * cellSize}px`

  field.append(cell);

  cell.addEventListener('click', () => {
    const currentLeft = +cell.style.left[0];
    const currentTop = +cell.style.top[0];

    cell.style.left = `${emty.left * cellSize}px`;
    cell.style.top = `${emty.top * cellSize}px`;

    console.log(currentLeft, currentTop)
    emty.left = currentLeft;
    emty.top = currentTop;
  });

}
