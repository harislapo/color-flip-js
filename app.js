const colorPallete = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'cyan',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const colorIndex = getRandomNumber();
  document.body.style.backgroundColor = colorPallete[colorIndex];
  color.textContent = colorPallete[colorIndex];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colorPallete.length);
};
