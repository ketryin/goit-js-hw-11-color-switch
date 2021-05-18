const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let intervalID;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const chengeBodyColor = () => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
};

buttonStart.addEventListener('click', clickOnStart);
buttonStop.addEventListener('click', clickOnStop);

function clickOnStart() {
    intervalID = setInterval(chengeBodyColor, 1000);
    buttonStart.setAttribute('disabled', true);
};
 
function clickOnStop() {
    clearTimeout(intervalID);
    buttonStart.removeAttribute('disabled');
 };