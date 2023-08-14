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
  const randomNum = getRandomNumber();
  document.body.style.backgroundColor = colorPallete[randomNum];
  color.textContent = colorPallete[randomNum];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colorPallete.length);
};
